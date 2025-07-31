import React, { useEffect, useState } from "react";

const UseEffect = () => {

    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")

    useEffect(() => {
        return () => {
        }
    }, [name, nickname]);

    return (
        <>
            <div>
                <div>
                    <input maxLength={10} name="name" value={name} onChange={e => setName(e.target.value)} placeholder="name" />
                    <input maxLength={10} name="nickname" value={nickname} onChange={e => setNickname(e.target.value)} placeholder="nickname" />
                </div>
            </div>
            <div>
                <div>
                    <input value={name}></input>
                    <input value={nickname}></input>
                </div>
            </div>
        </>
    )
}
export default UseEffect;