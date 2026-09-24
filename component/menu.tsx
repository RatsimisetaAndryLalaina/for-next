'use client';

import Link from "next/link";
import classes from "./menu.module.css";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/about", label: "About", urlStart: "/about" },
  { href: "/request/52", label: "Request 52 available", urlStart: "/request" },
  { href: "/community", label: "Goto community", urlStart: "/community" },
];

export default function Menu() {
    const pathname = usePathname() ?? "";
    
    return (
        <nav>
            {menuItems.map((item) => {
                const isActive = pathname.startsWith(item.urlStart);
                const className = `${classes.menu} ${isActive ? classes.active : ""}`;
                if (isActive) {
                    console.log(`Active menu item: ${className}`);
                }
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${classes.menu} ${isActive ? classes.active : ""}`}
                    >
                        {item.label} |
                    </Link>
                );
            })}
        </nav>
    );
};