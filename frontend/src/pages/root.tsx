import { Outlet } from "react-router-dom";

export function Root() {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
}
