import { useNavigate } from "react-router-dom";
import "./Instructor_Dash.css";
import { useAuthContext } from "../hooks/useAuthContext";

const Instructor_Dash = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();

  const move_to_forum = () => {
    navigate("/forum");
  };

  const move_to_schedule = () => {
    navigate("/schedule");
  };

  const move_to_recent_dives = () => {
    navigate("/divesOfStudent");
  };

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    navigate("/"); // go to login
  };

  return (
    <div className="main-instructor">
      <div className="title-instructor">
        <h1>Welcome Instructor</h1>
      </div>
      <button className="neon-btn-instructor" onClick={move_to_recent_dives}>
        Students dive log
      </button>
      <button className="neon-btn-instructor" onClick={move_to_schedule}>
        Schedule
      </button>
      <button className="neon-btn-instructor" onClick={move_to_forum}>
        Forum
      </button>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default Instructor_Dash;
