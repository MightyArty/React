import { useNavigate, Navigate } from "react-router-dom";
import "./Student_Dash.css";
import { useAuthContext } from "../hooks/useAuthContext";

const Student_Dash = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();

  const move_to_forum = () => {
    navigate("/forum");
  };

  const move_to_schedule = () => {
    navigate("/student_schedule");
  };

  const logout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    navigate("/"); // go to login
  };

  return (
    <div className="main-student">
      <div className="title-student">
        <h1>Welcome Student</h1>
      </div>
      <select
        className="neon-btn-student"
        onChange={(e) => {
          const selectDive = e.target.value;
          if (selectDive === "add") navigate("/add_dive");
          if (selectDive === "show") navigate("/show_dives");
        }}
      >
        <option>Dives</option>
        <option value="add">Add Dive</option>
        <option value="show">Show Dives</option>
      </select>
      <button className="neon-btn-student" onClick={move_to_schedule}>
        Schedule
      </button>
      <button className="neon-btn-student" onClick={move_to_forum}>
        Forum
      </button>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default Student_Dash;
