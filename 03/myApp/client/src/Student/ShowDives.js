import React, { useEffect, useState } from "react";
import { useApiContext } from "../hooks/useApiContext";
import { useAuthContext } from "../hooks/useAuthContext";

import "./ShowDives.css";

const ShowDives = () => {
  const [divesState, setDivesState] = useState([]);
  const data = useAuthContext();
  const { user } = useAuthContext();
  const { apiCall } = useApiContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let api = `dives`;

        if (user?.title === "Student") {
          api = `dives?userId=${user?._id}`;
        }

        const { data } = await apiCall(api);
        console.log(data);
        setDivesState(data.dives);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [user, apiCall]);

  return (
    <div>
      <div className="app">
        <table>
          <thead>
            <tr>
              <th>Confirmed</th>
              <th>Date</th>
              <th>Site</th>
              <th>Dive Duration</th>
              <th>Depth</th>
              <th>Special Equipment</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
            {divesState.map((data) => {
              return (
                <tr key={data._id}>
                  <td>{data.state}</td>
                  <td>{new Date(data.date).toLocaleDateString()}</td>
                  <td>{data.site}</td>
                  <td>{data.duration} min</td>
                  <td>{data.depth} m</td>
                  <td>{data.equipment}</td>
                  <td>{data.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowDives;
