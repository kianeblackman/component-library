import React from "react";
import "./button.scss";

export interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export default function Button({ primary = false, label, onClick }: ButtonProps) {
  const mode = primary ? "btn--primary" : "btn--secondary";

  return (
    <button type="button" className={["btn", mode].join(" ")} onClick={onClick}>
      {label}
    </button>
  );
}
