import React from 'react'
import classes from "./InputComponent.module.css"

const InputComponent = (props) => {
  return (
    <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input}/>
    </div>
  )
}

export default InputComponent