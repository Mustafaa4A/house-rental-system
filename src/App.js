import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/routes/404-error/404-error.component";
import Home from "./components/routes/home/Home.components";
import HousesList from "./components/routes/houses-list/houses-list.cmpont";
import HouseDetail from "./components/routes/house-detail/house-detail.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/sign-in/sign-in.component";
import SignUp from "./components/sing-up/sign-up.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="houses-list" element={<HousesList />}></Route>
        <Route path="houses-list/:houseID" element={<HouseDetail />} />
        <Route path="houses-list/:houseID" element={<HouseDetail />} />
      </Route>
      <Route path="auth/sign-in" element={<SignIn />} />
      <Route path="auth/sign-up" element={<SignUp />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
