import React, { useCallback, useEffect, useState } from "react";
import { useApiContext } from "../hooks/useApiContext";
import { useAuthContext } from "../hooks/useAuthContext";
import "./DivesOfStudents.css";
import Dialog from "./Dialog";

const DivesOfStudents = () => {
  const [divesState, setDivesState] = useState([]);
  const [showTask, setShowTask] = useState(false);
  const { user } = useAuthContext();
  const { apiCall } = useApiContext();

  const fetchData = useCallback(async () => {
    try {
      const { data } = await apiCall("dives");
      console.log(data);
      setDivesState(data.dives);
    } catch (error) {
      console.log(error);
    }
  }, [user, apiCall]);

  const takeReqAction = async (id, action) => {
    try {
      const { data } = await apiCall("dives", "PATCH", {
        diveId: id,
        state: action,
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
    setShowTask(false);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="main-DivesOfStudents">
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Site</th>
              <th>Dive Duration</th>
              <th>Depth</th>
              <th>Special Equipment</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {divesState.map((dive) => {
              return (
                <tr key={dive._id}>
                  <td>{dive?.user?.name}</td>
                  <td>{dive?.user?.email}</td>
                  <td>{new Date(dive.date).toLocaleDateString()}</td>
                  <td>{dive.site}</td>
                  <td>{dive.duration} min</td>
                  <td>{dive.depth} m</td>
                  <td>{dive.equipment}</td>
                  <td>{dive.note}</td>
                  <td>
                    {dive?.state === "Pending" ? (
                      <>
                        <button
                          className="neon-btn"
                          onClick={() => takeReqAction(dive._id, "Confirmed")}
                        >
                          &#10004;
                        </button>
                        <button
                          className="neon-btn"
                          onClick={() => takeReqAction(dive._id, "Declined")}
                        >
                          ❌
                        </button>
                      </>
                    ) : (
                      <>{dive?.state}</>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DivesOfStudents;
