import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Dashboard } from "./pages/dashboard/DashBoard";
import { Team } from "./pages/ManageTeam/Team";
import { ContactInfo } from "./pages/ContactInfo/ContactInfo";
import { Invoices } from "./pages/invoices/Invoices";
import { Profile } from "./pages/profile/Profile";
import { Calendar } from "./pages/calendar/Calendar";
import { Faq } from "./pages/faq/Faq";
import { BarChart } from "./pages/barchart/BarChart";
import { LineChart } from "./pages/linechart/Linechart";
import { GeoChart } from "./pages/geochart/Geochart";
import { PieChart } from "./pages/piechart/PieChart";
import { Error } from "./pages/Error/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contactInfo" element={<ContactInfo />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/barChart" element={<BarChart />} />
      <Route path="/lineChart" element={<LineChart />} />
      <Route path="/pieChart" element={<PieChart />} />
      <Route path="/geoChart" element={<GeoChart />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
