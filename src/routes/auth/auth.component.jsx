import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../404-error/404-error.component";

import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";
import UserProfile from "../user-profile/user-profile.component";

const Auth = () => {
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Auth;
