import "./expenseitem.css"
function expenseitem(){// we can give the function any name but its a convention to give the same name as the file name.
return(
    // <h1>ExpenseItem</h1>
    <div className="expense-item">
        <div>Date</div>
        <div className="expense-item__description">
            <h2>Car Insuarance</h2>
            <div className="expense-item__price">$340.67</div>
        </div>

    </div>
)
}
export default expenseitem