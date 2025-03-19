import React, { useId } from 'react';

const Select = ({ label, options = [], className = '', ...props }) => {
  const id = useId();
  return (
    <>
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      <select className={`${className}`} id={id} {...props}>
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
