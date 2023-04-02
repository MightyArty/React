import "./Schedule.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useApiContext } from "../hooks/useApiContext";

const Weekly_Update = () => {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState();
  const { apiCall } = useApiContext();

  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        //http://localhost:4000/api/appointments/ method default GET
        const { data } = await apiCall("appointments");
        console.log(data?.appointments);
        setAllEvents(data.appointments);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  async function handleAddEvent() {
    for (let i = 0; i < allEvents.length; i++) {
      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(allEvents.end);
      // checking for valid input of the start and end dates
      if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
        alert("CLASH");
        return;
      }
    }
    try {
      //http://localhost:4000/api/appointments/ method POST
      const { status, data } = await apiCall("appointments", "POST", {
        start: newEvent.start,
        end: newEvent.end,
        title: newEvent.title,
      });
      if (status == 200) {
        setAllEvents([...allEvents, newEvent]);
        setNewEvent("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main-schedule">
      <h1 className="schedule-header">School Schedule</h1>
      <Calendar className="schedule-table"
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, margin: "50px" }}
      />
      <div>
        <h2 className="schedule-event">Add New Event</h2>
        <input className="schedule-table"
          autoFocus
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(event) =>
            setNewEvent({ ...newEvent, title: event.target.value })
          }
        />
        <DatePicker className="schedule-table"
          placeholderText="Start Date"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker className="schedule-table"
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
    </div>
  );
};

export default Weekly_Update;
