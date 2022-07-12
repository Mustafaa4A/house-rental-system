import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./routes/404-error/404-error.component";
import Home from "./routes/home/Home.components";
import PropertyDetail from "./routes/property-detail/property-detail.component";
import Navigation from "./routes/navigation/navigation.component";
import Properties from "./routes/properties/properties.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import UserProfile from "./routes/user-profile/user-profile.component";

const App = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="properties" element={<Properties />}></Route>
          <Route path="properties/:houseID" element={<PropertyDetail />} />
          <Route path="auth/profile" element={<UserProfile />} />
        </Route>
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
