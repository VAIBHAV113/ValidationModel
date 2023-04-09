import React from "react";
// import Card from "./card";
import userCSS from "./userList.module.css";

export default function userList(props) {
  return (
   
      <div className="card">
        {props.users &&
           props.users.map((data) => (
              <div key={data.id} className={userCSS.mapDiv}>
                <span className={userCSS.spanDiv}>{data.names}</span>
                <span className={userCSS.spanDiv}>({data.age} Years old)</span>
              </div>
            ))
          }
      </div>
   
  );
}
