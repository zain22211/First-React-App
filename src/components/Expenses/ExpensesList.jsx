import React from "react";
import "./ExpensesList.css"
import ExpenseItems from "./ExpenseItems"

const ExpensesList = (props) =>{
    if(props.items.length ===0){
        return <h2 className="expenses-list__fallback">Found No Expenses.</h2>
    }

    return <li className="expenses-list">
        {props.items.map((expenses) => (
        <ExpenseItems
          key={expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </li>
};
export default ExpensesList;