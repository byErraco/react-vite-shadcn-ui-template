import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashLayout from "./components/layouts/DashLayout";
import OverviewPage from "./pages/OverviewPage";
import SettingsProfilePage from "./pages/SettingsProfilePage";
import SettingsLayout from "./components/layouts/SettingsLayout";
import { Toaster } from "./components/toaster/toaster";
import CustomersPage from "./pages/CustomersPage";

export default function App() {
  return (
    <main>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<DashLayout />}>
            <Route index element={<OverviewPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/settings" element={<SettingsLayout />}>
              <Route index element={<SettingsProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
