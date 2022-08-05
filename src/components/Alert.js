import React from 'react'

function Alert(props) {
  const Capitalize = (word)=>{
    let s = word.toLowerCase();
    let f = word.charAt(0).toUpperCase();
    let ans = f + s.slice(1);
    return ans;
  }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.message}
    </div>
  )
}

export default Alert