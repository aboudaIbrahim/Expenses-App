
import './NewExpense.css' ; 
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{  
 
    const newExpenseHandler = (enteredExpense)=>{ 
        const expenseData={ 
             ...enteredExpense , 
             id:Math.random().toString() ,
         } ; 
        props.onAddNewExpense(expenseData)
    }

    return( 
        <div className='new-expense'> 
           <ExpenseForm  onSaveEpenseHandler={newExpenseHandler}/>
        </div>
    );
} 

export default NewExpense ; 