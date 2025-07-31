import React, { useState, useEffect } from "react";
import PushAndDelete from "./PushAndDelete";

const data = []
const Parent = () => {

    const [customers, setCustomers] = useState([])
    const [name, setName] = useState("")


    const handleDelete = (id) => {
        setCustomers((prevCustomers) =>
            prevCustomers.filter((customer) => customer.id !== id)
        )
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleAddCustomer();
        }
    }

    const handleAddCustomer = () => {
        if (name) {
            setCustomers((prevCustomers) => [
                ...prevCustomers,
                { id: Date.now(), name: name.trim() }])
            setName("")
        }
    }


    return (
        <>
            <PushAndDelete name={name}
                setName={setName}
                handleEnter={handleEnter}
                handleDelete={handleDelete}
                handleOnClick={handleAddCustomer}
            />
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id} onDoubleClick={() => handleDelete(customer.id)}>
                        {customer.name}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Parent