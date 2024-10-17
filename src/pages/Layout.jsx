import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import { useEffect } from "react";
import importScripts from "../utils/importScripts";
import { Outlet } from "react-router-dom";
export default function Layout() {
  useEffect(() => {
    importScripts();
  }, []);
  return (
    <>
      <NavigationBar />
      <Outlet />
      <br />
      <br />
      <Footer />
    </>
  );
}
