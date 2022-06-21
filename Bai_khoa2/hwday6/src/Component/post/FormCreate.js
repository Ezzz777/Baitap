import React, { useState } from "react";

export default function FormCreate ({onCreateExpense}){
    
    // tạo các hành động của button ẩn hiện
    const [editable, setEditable] = useState(false);

    // tạo thao tác với ô input
    const [newAmount, setnewAmount] = useState('');
    const [newName, setnewName] = useState('');
    const [newDate,setnewDate] = useState('');

    // vì là khi bấm vào nút Add ở form sẽ xảy ra sự kiện onsubmit nên là chúng ta bắt sự kiện onsubmit cho thằng form 
    const handleCreateExpense = (event) => {
        event.preventDefault();
        // luôn luôn phải có dòng này

        // kiểm tra 3 giá trị Amount, Name,Date đã nhập hay chưa
        if (!newAmount || !newName || !newDate){
            alert("PLease input all fields");
            return;
        }

        // gọi onCreateExpense và truyền 3 cái giá trị vào 
        onCreateExpense(newName, newAmount, newDate);

        // khi điền xong thì đóng lại và reset làm trống lại những ô input
        setEditable(false);
        setnewDate('');
        setnewName('');
        setnewAmount('');

    }

    return (
    <form onSubmit={handleCreateExpense} className="create-expense-form">
        {/* {! editable } dòng 8 là khi mà cái Editable này chưa được tương tác thì nó chạy những dòng trong đó. */}
        {!editable && <div className="open-expense-form">
            <button type = "button" onClick={ () => setEditable(true) }>ADD NEW Expense</button>
        </div>}

        {editable && <div>
           
            {/* đây là 3 ô form để điền vào */}
            <div className="input-group">
                <label>Name</label>
                <input type="text" onChange={(event) => setnewName(event.target.value)}/>
            </div>

            <div className="input-group">
                <label>Amount</label>
                <input type="number" onChange={(event) => setnewAmount(event.target.value)}/>
            </div>
            
            <div className="input-group">
                <label>Date</label>
                <input type="date"onChange={(event) => setnewDate(event.target.value)}/>
            </div>

            {/* đây là 2 cái nút ADD và Cancel */}
            <div className="acctions">
                <button type="submit">Add</button>
                {/* onclick vào setEditable(true) đối ngược false ở trên để kích hoạt  */}
                <button type="button" onClick={() => setEditable(false)}>Cancel</button>
            </div>

        </div>
        }
    </form>

    );
}