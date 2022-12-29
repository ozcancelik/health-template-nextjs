import React from "react";

export default function Circle({
  size,
  value,
  name,
  color,
  left,
  top,
  icon,
}: {
  size: number;
  value: number;
  name: string;
  color: string;
  left: number;
  top: number;
  icon?: React.ReactElement;
}) {
  if (typeof window !== "undefined") {
    if (window.innerWidth < 1024) {
      left = 75;
      top = 0;
    }
  }
  return (
    <div
      className="lg:absolute text-center leading-4 duration-300 cursor-pointer hover:scale-110"
      style={{
        left: `${left}%`,
        top: `${top}%`,
      }}
    >
      <div
        className="rounded-full border-4 border-white"
        style={{
          backgroundColor: color,
          width: `${size}rem`,
          height: `${size}rem`,
        }}
      >
        {icon && (
          <div className="flex items-center justify-center h-full">
            {React.cloneElement(icon, {
              className: "w-8 h-8",
            })}
          </div>
        )}
      </div>
      <h3>{value}</h3>
      <div className="opacity-50 text-sm">{name}</div>
    </div>
  );
}
