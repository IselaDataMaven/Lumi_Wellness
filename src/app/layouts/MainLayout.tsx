import { Outlet } from "react-router-dom";
import BottomNavigation from "../../dashboard/components/BottomNavigation";

/**
 * MainLayout — wraps authenticated app screens with bottom navigation.
 * Desktop sidebar support is built into individual screens via lg:pl-64.
 * This layout provides the shared BottomNavigation for mobile.
 */
export default function MainLayout() {
  return (
    <>
      <Outlet />
      <BottomNavigation />
    </>
  );
}
