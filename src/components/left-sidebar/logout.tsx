import Link from "next/link";
import React from "react";
import { FiLogOut } from "react-icons/fi";

export default function Logout() {
  return (
    <div className="inline-flex mx-auto">
      <Link href="/" className="font-light flex items-center gap-4">
        Logout
        <FiLogOut className="w-4 h-4" />
      </Link>
    </div>
  );
}
