import { useDispatch } from "react-redux";
import { logout } from "../app/loginSlice";
import { useEffect, useState, useCallback } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(null);
  const timeoutDuration = 5000;

  const resetTimer = useCallback(() => {
    if (timer) clearTimeout(timer);
    const newTimer = setTimeout(() => {
      dispatch(logout());
    }, timeoutDuration);
    setTimer(newTimer);
  }, [dispatch, timer]);

  useEffect(() => {
    resetTimer();
    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = () => {
    resetTimer();
  };

  const handleMouseMove = () => {
    resetTimer();
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} onMouseMove={handleMouseMove} style={{display: "flex", flexDirection: "column",justifyContent:"center", alignItems: "center", height: "100vh", width: "100vw"}}>
      <div style={{marginBottom:"5px"}}>Dashboard</div>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Dashboard;
