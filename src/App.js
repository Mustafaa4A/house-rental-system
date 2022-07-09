import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./routes/404-error/404-error.component";
import Home from "./routes/home/Home.components";
import HousesList from "./routes/houses-list/houses-list.cmpont";
import HouseDetail from "./routes/house-detail/house-detail.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import UserProfile from "./routes/user-profile/user-profile.component";

const App = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="houses-list" element={<HousesList />}></Route>
          <Route path="houses-list/:houseID" element={<HouseDetail />} />
          <Route path="auth/profile" element={<UserProfile />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
