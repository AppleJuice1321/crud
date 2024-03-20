"use client"
import { useState } from "react";

export default function Input({
  // all props
  label,
  type,
  name,
  placeholder = "",
  value = "",
  statusMessage = "",
}) {
  
  // Bruger usestate for at der ikke er en tom "" string i input feltet
  const [valueState, setValueState] = useState(value);

  return (
    <label>
      {/* Input for user to use */}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={valueState}
        // Sikre os at input feltet altid kan ændres i
        onChange={(event) => {
          setValueState(event.target.value);
        }}
        autoFocus={statusMessage ? true : false}
      />
      <span>
        {label}
      </span>
      <span>{statusMessage}</span>
    </label>
  );
}
