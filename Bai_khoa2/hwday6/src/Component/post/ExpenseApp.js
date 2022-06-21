import React, { useState } from "react";
import expenseData from "../../data/expense-data";
import Chart from "./Chart";
import FormCreate from "./FormCreate";
import ExpenseItem from "./ExpenseItem";

// theo sơ đồ thì thằng này là cao nhất nên nó sẽ chứa dữ liệu
export default function ExpenseApp(){
    const [data, setData] = useState(expenseData);

     
    const createExpense = (name, amount, date) => {
        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount,
            date: date,
        }

        const newData = [...data,newExpense];
        setData(newData)
    }

    return(
        <div>
            {/* trong sơ đồ thì ExpenseApp là lớn nhất nên là ở đây sẽ 
            đưa những cái nằm dưới ExpenseApp vào.  */}
            {/* và đây */}
            <FormCreate onCreateExpense={createExpense}/>

            {/* và đây */}
            <div className="expense-content">
                
                <div className="expense-filter">
                    <span>Filter by year</span>
                    <select>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                </div>

                {/* Và đây */}
                <Chart data={data} filterYear={2022}/>

                {/* và đây */}
                <div className="expense-list">
                    {data.map (item => <ExpenseItem 
                        // đây có nghĩa là gọi ExpenseItem và truyền các giá trị name,amount,date... vào
                        key={item.id} 
                        id={item.id} 
                        name={item.name} 
                        date={item.date} 
                        amount={item.amount}
                        />)}
                </div>
            </div>
        </div>

    );
};