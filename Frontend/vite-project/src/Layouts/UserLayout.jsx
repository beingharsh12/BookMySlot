
import { Outlet } from "react-router-dom";
import UserNavbar from "../components/navigation/UserNavbar";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8F8FC]">

      <UserNavbar />

      {/* Dynamic Page Area */}
      <main className="ml-64 pt-20 min-h-screen">

        <div className="p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default UserLayout;
