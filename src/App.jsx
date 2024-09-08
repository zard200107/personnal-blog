import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="homepage" />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="bookings/:bookingId" />
          <Route path="checkin/:bookingId" />
          <Route path="cabins" />
          <Route path="users" />
          <Route path="settings" />
          <Route path="account" />
        </Route>

        <Route path="login" />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
