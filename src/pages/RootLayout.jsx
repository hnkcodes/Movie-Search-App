import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="center-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
