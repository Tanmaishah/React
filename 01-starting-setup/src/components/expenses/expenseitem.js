import React,{useState} from 'react'
import "./expenseitem.css"
import Card from "../UI/Card.js"

function Expenseitem(props){// we can give the function any name but its a convention to give the same name as the file name.
    const [title,setTitle] = useState(props.title)
    const clickHandeler=()=>{
        setTitle('Updated!!!')
        console.log(title);
    }
    return(
    // <h1>ExpenseItem</h1>
    <Card className="expense-item">
        <div> {props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{props.price}</div>
        </div>
        <button onClick={clickHandeler}>Change title.</button>
    </Card>
)
}
export default Expenseitem