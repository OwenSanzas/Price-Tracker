import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";


export default function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log('exspense');
        console.log(selectedYear);
    };
    
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChange={filterChangeHandler}/> 
            <ExpenseItem
                title = {props.items[0].title}
                amount = {props.items[0].amount}
                date = {props.items[0].date}
            />
            <ExpenseItem
                title = {props.items[1].title}
                amount = {props.items[1].amount}
                date = {props.items[1].date}
            />
            <ExpenseItem
                title = {props.items[2].title}
                amount = {props.items[2].amount}
                date = {props.items[2].date}
            />
        </Card>
        </div>
    )
    
}