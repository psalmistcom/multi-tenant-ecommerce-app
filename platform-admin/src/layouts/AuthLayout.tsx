import { Outlet } from "react-router";
import Logo from "@/assets/logo.png";

export default function AuthLayout() {
  return (
    <div className="flex min-h-svh">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-[#06251A] to-[#10543A] p-12 lg:w-110 xl:w-125">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="E-commerce Logo" className="size-12 roundd-xl" />
          <span className="text-base font-bold text-white">Platform Admin</span>
        </div>
        <div>
          <h1 className="max-w-95 text-2xl leading-snug font-bold text-white">
            Run every store on your marketplace from one place.
          </h1>
          <p className="mt-3.5 max-w-90 text-sm leading-5 text-[#c7dccb]">
            Tenants, catalog, commissions, delivery network and reporting —
            unified across every store on the platform.
          </p>
        </div>
        <p className="text-xs text-[#8fb093]">
          &copy; {new Date().getFullYear()} HighQ Innovations
        </p>
      </div>
      {/* Main content */}
      <div className="flex flex-1 items-center justify-center p-8 bg-background">
        <Outlet />
      </div>
    </div>
  );
}
