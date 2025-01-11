import { Outlet } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div>
      {/* navbar */}
      {/* content */}
      <Outlet />
      {/* footer */}
    </div>
  );
};

export default MasterLayout;
