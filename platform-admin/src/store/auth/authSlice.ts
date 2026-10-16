import { createSlice } from "@reduxjs/toolkit";

interface User {
  email: string;
  fullName: string;
}

export type AsyncStatus = "idle" | "loading" | "succeeded" | "failed";

interface AuthState {
  user: User;
  accessToken: string | null;
  refreshToken: string | null;
  status: AsyncStatus;
  error: string | null;
  // isLoading?: boolean,
  // userType: USER_TYPE,

  //   twoFactorToken: string | null;
  //   requiredsTwoFactor: boolean;
}
const initialState: AuthState = {
  user: null,
  accessToken: "",
  refreshToken: "",
  status: "idle",
  error: null,
  // userType: 'PLATFORM_ADMIN',
  // isLoading: false,
  // twoFactorToken: null,
  // requiredsTwoFactor: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthError: (state) => {
      state.error = null;
    },
  },
});

export default authSlice.reducer;
