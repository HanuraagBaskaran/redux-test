import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
        }
        />
    </Routes>
    </BrowserRouter>
  );
}

export default App;