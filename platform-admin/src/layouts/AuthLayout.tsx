import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container flex h-full items-center justify-center">
          <div className="mx-auto w-full max-w-sm">
            Auth Layout
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
