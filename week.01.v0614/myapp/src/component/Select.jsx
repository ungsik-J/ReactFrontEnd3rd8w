import React, { useState } from "react";

const selectOptions = ["Seoul", "Busan", "Incheon", "Daegu"];

export default function Select() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <label htmlFor="city-select">도시 선택:</label>
            <select id="city-select" value={value} onChange={handleChange}>
                <option value="">-- 선택하세요 --</option>
                {selectOptions.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            {value && <p>선택한 도시: {value}</p>}
        </div>
    );
}
