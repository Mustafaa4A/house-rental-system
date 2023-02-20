import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

import Loading from "./components/loading/loading.components";

const Navigation = lazy(() =>
  import("./routes/navigation/navigation.component")
);
const Home = lazy(() => import("./routes/home/home.components"));
const Auth = lazy(() => import("./routes/auth/auth.component"));
const AboutUs = lazy(() => import("./routes/about-us/about-us.component"));
const ContactUs = lazy(() =>
  import("./routes/contact-us/contact-us.component")
);
const Properties = lazy(() =>
  import("./routes/properties/properties.component")
);
const PropertyDetail = lazy(() =>
  import("./routes/property-detail/property-detail.component")
);
const BookingProperty = lazy(() =>
  import("./routes/booking-property/booking-property.conponent")
);
const NotFoundPage = lazy(() =>
  import("./routes/404-error/404-error.component")
);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Home />} />
          <Route path="properties" element={<Properties />}></Route>
          <Route path="properties/:houseID" element={<PropertyDetail />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="booking" element={<BookingProperty />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="auth/*" element={<Auth />} />
      </Routes>
    </Suspense>
  );
};

export default App;
