import React from 'react';

const Dropdown = ({ options, selectedOption, onOptionChange }) => {
    return (
        <select value={selectedOption} onChange={onOptionChange} style={{width:'150px',textAlign:'center',backgroundColor:'black',marginLeft:'50px',color:'white',marginTop:'10px'}}>
            <option value="">All Departments</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Dropdown;