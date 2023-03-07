import "./expenseitem.css"
function expenseitem(props){// we can give the function any name but its a convention to give the same name as the file name.
    const expenseDate=new Date(2021,2,2);
    const expenseTitle='Title';
    const expensePrice='56$';
    return(
    // <h1>ExpenseItem</h1>
    <div className="expense-item">
        <div> {props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.price}</div>
        </div>

    </div>
)
}
export default expenseitem