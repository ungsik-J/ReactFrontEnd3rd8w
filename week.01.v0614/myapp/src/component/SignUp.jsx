import React, { useState } from "react";


const data = {
    name: "",
    gender: "male"
}
const SignUp = () => {

    const [formData, setFormData] = useState(data)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`${formData.name}, ${formData.gender}`);

        setFormData(data)
    }

    return (
        <>
            <form>
                <label>이름</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <br />
                <label>성별
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value='male'>남자</option>
                        <option value='female'>여자</option>
                    </select>
                </label>
                <br />
                <button type="submit" onClick={handleSubmit} >제출</button>
            </form>
        </>
    )
}

export default SignUp;
