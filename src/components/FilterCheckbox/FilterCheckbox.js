import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox({ checkboxStatus, onCheckboxChange }) {
  function handleCheckboxChange(evt) {
    onCheckboxChange(evt.target.checked);
  }

  return (
    <label className="switch" onClick={handleCheckboxChange}>
      <input
        className="switch__input"
        name="short-film"
        type="checkbox"
        defaultChecked={checkboxStatus}
      />
      <span className="switch__span" />
    </label>
  );
}