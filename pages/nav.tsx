import Link from "next/link";
import React from "react";
export default function Nav() {
  return (
    <div className="text-center mt-5">
      <Link href="/">
        {" "}
        <button className="btn btn-primary">Home</button>
      </Link>
      <Link href="/about">
        {" "}
        <button className="btn btn-primary">About</button>
      </Link>

      <Link href="/form">
        {" "}
        <button className="btn btn-primary">Form</button>
      </Link>
    </div>
  );
}
