import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate.js'
import Card from "../UI/Card.js"
import React, {useState} from "react"



export default function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }
    

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <button onClick={clickHandler}>change</button>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}