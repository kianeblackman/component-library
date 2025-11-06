import React from "react";
import "./toggle-switch.scss";

export interface ToggleSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ToggleSwitch({
  checked = false,
  disabled = false,
  variant = "default",
  onChange,
}: ToggleSwitchProps) {
  return (
    <label className={`toggle toggle--${variant} ${disabled ? "toggle--disabled" : ""}`}>
      <input type="checkbox" className="toggle__checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      <span className="toggle__slider"></span>
    </label>
  );
}
