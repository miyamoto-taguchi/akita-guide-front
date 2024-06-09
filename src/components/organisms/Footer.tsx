import React from "react";
import Typography from "../atoms/Typography";

const Footer = () => {
  return (
    <footer className=" p-2 border-t border-black text-center">
      <div className="grid columns-2">
        <div className="grid">
          <Typography>Tokyo Guide</Typography>

          <div>
            <p className=" bg-slate-500 rounded-md border">a</p>
            <p className=" bg-slate-500 rounded-md border">a</p>
            <p className=" bg-slate-500 rounded-md border">a</p>
          </div>
        </div>
        <div className="grid">
          <ul className=" list-disc">
            <li>aa</li>
            <li>aa</li>
          </ul>
          <ul>
            <li>aa</li>
          </ul>
          <ul>
            <li>aa</li>
          </ul>
        </div>
      </div>

      <Typography size="lg">© 2024 Miyamoto-Taguchi Inc.</Typography>
    </footer>
  );
};

export default Footer;
