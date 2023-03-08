import "./Expenses.css"
import Expenseitem from "./expenseitem"
import Card from "../UI/Card.js"
function Expenses(props){
    return(

        <div className="expenses">

    <Expenseitem 
      title={props.list[0].title}
      price={props.list[0].amount} 
      date={props.list[0].date} />  
      <Expenseitem 
      title={props.list[1].title} 
      price={props.list[1].amount}
      date={props.list[1].date}/> 
      <Expenseitem title={props.list[2].title}
      price={props.list[2].amount} 
      date={props.list[2].date}/> 
      <Expenseitem title={props.list[3].title}
      price={props.list[3].amount} 
    date={props.list[3].date}/> 
    </div>
    )
}
export default Expenses