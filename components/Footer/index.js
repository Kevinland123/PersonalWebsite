import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-15 p-2 laptop:p-0">
        <div>
          {/* <h1 className="text-2xl text-bold">Contact.</h1> */}
          <div className="mt-10">
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        © 2023 Kevin Zhu. All rights reserved.
      </h1>
    </>
  );
};

export default Footer;
