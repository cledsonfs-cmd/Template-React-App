import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
