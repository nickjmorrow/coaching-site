import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./constants/routeConstants.ts";
import "./index.css";
import AboutPage from "./pages/about-page/AboutPage.tsx";
import AppPage from "./pages/app-page/AppPage.tsx";
import ContactPage from "./pages/contact-page/ContactPage.tsx";
import ErrorPage from "./pages/error-page/ErrorPage.tsx";
import ServicesPage from "./pages/services-page/ServicesPage.tsx";
import TestimonialsPage from "./pages/testimonials-page/TestimonialsPage.tsx";
import HomePage from "./pages/home-page/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: ROUTE_CONSTANTS.HOME,
    element: <AppPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: ROUTE_CONSTANTS.HOME, element: <HomePage /> },
      { path: ROUTE_CONSTANTS.ABOUT, element: <AboutPage /> },
      { path: ROUTE_CONSTANTS.CONTACT, element: <ContactPage /> },
      { path: ROUTE_CONSTANTS.TESTIMONIALS, element: <TestimonialsPage /> },
      { path: ROUTE_CONSTANTS.SERVICES, element: <ServicesPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
