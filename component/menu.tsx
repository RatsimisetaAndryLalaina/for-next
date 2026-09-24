import Link from "next/link";
import classes from "./menu.module.css";

const menuItems = [
  { href: "/about", label: "About" },
  { href: "/request/52", label: "Request 52 available" },
  { href: "/community", label: "Goto community" },
];

export default function Menu() {
  return (<section>
    {menuItems.map((item) => (
      <Link key={item.href} href={item.href} className={classes.menuItem}>
        {item.label} | 
      </Link>
    ))}
  </section>);
};