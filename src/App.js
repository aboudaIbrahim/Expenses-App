 import { useState } from 'react';  
 import Expenses from './components/Expenses/Expenses'; 
 import NewExpense from './components/NewExpense/NewExpense';

 const Dummy_Expenses = [
    {id:'e1' ,title:'Toilet Paper' , amount:450 , date:new Date(2022,3,13)},
    { id:'e2' , title:'Car Insurance' , amount:350 , date:new Date(2020,4,14)},
    { id:'e3',title:'Bills' , amount:250 , date:new Date(2020,5,15)},
    { id:'e4' , title:'Clothes' , amount:550 , date:new Date(2022,6,16 )}
]; 
 
 const App=()=>{   
  
     const [expenses , setExpenses]=useState(Dummy_Expenses)
     const addNewExpense=(expense)=>{ 
         setExpenses((previousExpenses)=>{ 
              return [expense,...previousExpenses]
         })
     }
     
    return ( 
        <div>
           <NewExpense onAddNewExpense={addNewExpense} />
           <Expenses items={expenses} />
        </div>
        
        );
}
export default App;
