import React from "react";

export default function CheckBox({ children, disabled, checked, onChange }) {
  return (
    <label>
      {" "}
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      {children}
    </label>
  );
}
