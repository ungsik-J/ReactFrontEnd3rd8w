import React, { useState } from "react";

export default function Booking() {

    const [haveBreakfast, setHaveBreakfast] = useState(true)
    const [numberOfGuest, setNumberOfGuest] = useState(0)

    const handleSubmit = (e) => {
        alert(`아침 : ${haveBreakfast} , 방문 : ${numberOfGuest}`)
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>아침식사 :
                <input type='checkbox' checked={haveBreakfast} onChange={e => setHaveBreakfast(e.target.checked)} />
            </label>
            <br />
            <label>방문객 수 :
                <input type='number' min={0} max={99} value={numberOfGuest} onChange={e => setNumberOfGuest(e.target.value) || 0} />
            </label>
            <br />
            <button type="submit">제출</button>
        </form>
    )
}