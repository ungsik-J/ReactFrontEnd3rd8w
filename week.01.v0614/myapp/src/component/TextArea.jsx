import React, { useState } from "react";


export default function TextArea() {

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(` textarea value : ${value}`)
        setValue('');
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor="textarea" >요청사항</label>
            <br />
            <textarea value={value}
                onChange={handleChange}
                placeholder="요청사항을 입력하세요"
                style={{ resize: "none", width: "100%" }} />
            <br />
            <button type="submit">제출</button>
        </form>
    </>
    )
}