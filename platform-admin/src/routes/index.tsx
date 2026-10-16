import { Route, Routes } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import VerifyForgotOtpPage from "../pages/auth/VerifyForgotOtp";
import ResetPasswordPage from "../pages/auth/ResetPassword";

export default function Routers() {
  return (
    <Routes>
      {/* Auth sections */}
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="forgot-password/otp" element={<VerifyForgotOtpPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
      </Route>

      {/* Dashboard sections */}
    </Routes>
  );
}
