import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="menu my-auto text-center">
      <ul className="inline-flex text-left flex-col justify-center gap-6">
        <li className="font-bold">
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/">Statistics</Link>
        </li>
        <li>
          <Link href="/">Family</Link>
        </li>
        <li>
          <Link href="/">Doctors</Link>
        </li>
      </ul>
    </div>
  );
}
