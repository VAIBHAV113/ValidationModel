import React, { useState } from "react";
import classes from "./user.module.css";
import Model from "./model";
import Card from "./card";
export default function User(props) {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [err, setErr] = useState();

  const handleAge = (e) => {
    setAge(e.target.value);
  };
  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      setErr({
        title: "Invalid Input",
        message: "Please Enter correct username and age ",
      });
      return;
    }
    if (+age < 1) {
      setErr({
        title: "Invalid Age",
        message: "Please Enter correct age (>0)",
      });
      return;
    }
    // const values = {
    //   user: user,
    //   age: age,
    // };

    props.onCall(user, age);
    setAge("");
    setUser("");
  };
  const handleClose = () => {
    setErr(null);
  };
  return (
    <Card>
      {err && (
        <Model
          title={err.title}
          message={err.message}
          closeModel={handleClose}
        />
      )}
      <div>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputDiv}>
            <div>
              <label className={classes.label} htmlFor="username">
                Username
              </label>
            </div>
            <input
              className={classes.use}
              value={user}
              placeholder="Enter Username"
              onChange={handleUser}
            />
          </div>
          <div className={classes.inputDiv}>
            <div>
              <label className={classes.label}>Age</label>
            </div>
            <input
              className={classes.ag}
              type="number"
              placeholder="Enter your Age"
              value={age}
              onChange={handleAge}
            />
          </div>
          <button type="Submit" className={classes.btn}>
            Add User
          </button>
        </form>
      </div>
    </Card>
  );
}
