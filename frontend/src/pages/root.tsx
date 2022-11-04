import { Outlet, NavLink, type NavLinkProps } from "react-router-dom";

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
