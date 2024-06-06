import React from 'react'
import classes from "./MealItemForm.module.css"
import InputComponent from '../../UI/InputComponent'

const MealItemForm = (props) => {
  return (
    <form className={classes.form}>

<InputComponent label="Amount" input={{
  id:"amount",
  type:"number",
  min:"1",
  max:"5",
  step:"1",
  defaultValue:"1"
}}/>
<button>+ Add</button>

    </form>
  )
}

export default MealItemForm