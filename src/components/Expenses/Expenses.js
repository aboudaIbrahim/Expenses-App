import React from 'react';
import './Expenses.css' 
import { useState } from 'react';
import ExpensesList from './ExpensesList'; 
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card'; 

const Expenses=(props)=>{  
    const [filteredYear,setFilteredYear]= useState('2020'); 
    const filterChangeHandler=(selectedYear)=>{ 
         setFilteredYear(selectedYear)
    } 
   
    const filteredExpenses = props.items.filter((expense)=>{ 
         return expense.date.getFullYear().toString()===filteredYear;
    }) 

    return( 
        <li>
        <Card className ='expenses'>  
            <ExpenseFilter selected={filteredYear}  onChangeFilter={filterChangeHandler} />
            <ExpenseChart  expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
        </li>
  
    );
} 
export default Expenses ; 