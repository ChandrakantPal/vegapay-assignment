import * as React from "react";
import CloseIcon from "./Icons/CloseIcon";
import MenuIcon from "./Icons/MenuIcon";
import CardIcon from "./Icons/CardIcon";
import UserIcon from "./Icons/UserIcon";
import dayjs from "dayjs";
import DownIcon from "./Icons/DownIcon";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`md:fixed inset-y-0 left-0 z-[101] border-r transition-all duration-300 bg-blue-950 text-white ${
          isSidebarOpen ? "w-64" : "w-0 md:w-16"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-6">
          {isSidebarOpen ? (
            <div className="text-lg font-semibold text-gray-50">VegaPay</div>
          ) : null}
          <button
            onClick={toggleSidebar}
            className="text-gray-50 hover:text-gray-50 focus:outline-none focus:text-gray-50"
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <CardIcon />
              {isSidebarOpen && (
                <span className="text-gray-50">Card Sales</span>
              )}
            </li>
            <li className="flex items-center space-x-4">
              <UserIcon />
              {isSidebarOpen && (
                <span className="text-gray-50">Team Management</span>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="sticky top-0 z-[100] flex items-center justify-between px-4 py-2 bg-white shadow">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="space-y-1">
              <div className="text-lg font-semibold text-gray-800">
                Alpha User
              </div>
              <small className="text-gray-300">
                Last Login: {dayjs(new Date()).format("DD/MM/YYYY hh:mm:ss")}
              </small>
            </div>
            <DownIcon />
          </div>
        </header>

        <main
          className={`flex-1 p-4 md:p-10 overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0 md:ml-16"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
