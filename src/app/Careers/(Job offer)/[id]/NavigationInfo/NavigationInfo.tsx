"use client";
import Link from "next/link";
import "./NavigationInfo.css";

function NavigationInfo() {
  return (
    <div className="NavigationInfo">
      <div className="container">
        <Link href="/">Home</Link>
        <i className="fa-solid fa-arrow-right"></i>
        <Link href="/Careers">Careers</Link>
        <i className="fa-solid fa-arrow-right"></i>
        <span>Sales Assistant</span>
      </div>
    </div>
  );
}
export default NavigationInfo;
