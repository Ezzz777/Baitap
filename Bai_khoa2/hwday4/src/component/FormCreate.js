import React, { useState } from "react";
// {firstName, lastName, gender, age, addess, email, password, comfirmPassword,}
export default function FormCreate() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [gender, setGender] = useState();
    const [age, setAge] = useState();
    const [addess, setAddess] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    // hàm xử lý các sự kiện onsubmit vào form
    const handleForm = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !password || !confirmPassword || !addess) {
            alert("Please input required fields");
            return
        }

        if (password.length < 6) {
            alert("Password must over than 6 character!");
            return
        }

        if (password != confirmPassword) {
            alert("Password confirm not correct!");
            return
        }

        if (isNaN(age) || age < 1) {
            alert("Age must be greater than 1");
            return
        }

        else {
            alert (`
                 Register successfully with info:
                 Name: ${firstName} ${lastName}
                 Age: ${age}
                 Gender: ${gender}
                Email: ${email}
            `)
        }
        // console.log(`
        // Register successfully with info:
        // Name: ${firstName} ${lastName}
        // Age: ${age}
        // Gender: ${gender}
        // Email: ${email}
        // `);

};

return (
    <form className="form-create" onSubmit={handleForm}>
        <div className="firstname">
            <label>Fistname</label>
            <input type="text" onChange={(event) => setFirstName(event.target.value)} />
        </div>

        <div className="lastname">
            <label>LastName</label>
            <input type="LastName" onChange={(event) => setLastName(event.target.value)} />
        </div>

        <div className="age">
            <label>Age</label>
            <input type="Age" onChange={(event) => setAge(event.target.value)} />
        </div>

        <div className="gender">
            <label>Gender</label>
            <select onChange={(event) => setGender(event.target.value)}>
                <option value="">-- --</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
            </select>
        </div>

        <div className="addess">
            <label>Addess</label>
            <input type="Address" onChange={(event) => setAddess(event.target.value)} />
        </div>

        <div className="email">
            <label>Email</label>
            <input type="Email" onChange={(event) => setEmail(event.target.value)} />
        </div>

        <div className="Password">
            <label>Password</label>
            <input type="Password" onChange={(event) => setPassword(event.target.value)} />
        </div>


        <div className="ComfirmPassword">
            <label>Comfirm Password</label>
            <input type="Password" onChange={(event) => setConfirmPassword(event.target.value)} />
        </div>
        <button >Resign</button>
    </form>
);
};