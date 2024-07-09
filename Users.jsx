import React from 'react'

export  function Users(props) {
    console.log(props.username);
  return (
    <div>
    <b> username : </b>
    <span>{props.username}</span>
    </div>
  );
}
