import React from 'react';

export default function Alert(props) {
  return (
    <div className="container" style={{ height: "35px" }}>
      {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}: </strong>{props.alert.mesg}
      </div>}
    </div>

  );
}


