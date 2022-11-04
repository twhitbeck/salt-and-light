import { Outlet, NavLink, type NavLinkProps } from "react-router-dom";

import logoSrc from "../assets/salt.png";

const CustomNavLink = (props: Omit<NavLinkProps, "className">) => (
  <NavLink
    className={({ isActive }) =>
      isActive
        ? "bg-pink-500 px-1 text-white"
        : "px-1 text-blue-700 hover:text-blue-600"
    }
    {...props}
  />
);

export function Root() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={logoSrc} className="max-h-full" alt="Logo" />
      </div>

      <nav className="flex gap-2 border-b p-4">
        <CustomNavLink to="classes">Classes</CustomNavLink>

        <CustomNavLink to="students">Students</CustomNavLink>
      </nav>

      <div className="container mx-auto py-6">
        <Outlet />
      </div>
    </>
  );
}
