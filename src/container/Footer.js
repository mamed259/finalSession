import React from "react";
import Link from "../components/Link";

const Footer = () => {
    return (
        <div>
            <Link filter={"SHOW_ACTIVE"}>Show Active</Link>
            <Link filter={"SHOW_COMPLETE"}>Show Complete</Link>
        </div>
    );
};

export default Footer;
