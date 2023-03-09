import React,{useState} from 'react';
import "./form.css"
function Form(){
    const [title,finalTitle]=useState('');
    const [date,finalDate]=useState('');
    const [amount,finalAmount]=useState('');
     function titleChangeHandler(event){
        finalTitle(event.target.value)
        console.log(title);
     }
     function amountChangeHandler(event){
        finalAmount(event.target.value)
        console.log(event.target.value);
     } 
     function dateChangeHandler(event){
        finalDate(event.target.value)
        console.log(event.target.value);
    } 
    return(
      <form>
        <div className="new-expense__controls">
                <div className="new-expense__control"> 
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
            <div className="new-expense__control"> 
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"  onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control"> 
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
      </form>
    )
}
export default Form