import React from 'react';
import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <label className="switch">
      <input
        className="switch__input"
        name="short-film"
        type="checkbox"
      />
      <span className="switch__span" />
    </label>
  );
}