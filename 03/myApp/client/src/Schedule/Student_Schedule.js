import "./Schedule.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState } from "react";
import { useApiContext } from "../hooks/useApiContext";

const Student_Schedule = () => {
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     let tempData = [];
  //     // getting all docs from Schedule collection
  //     const querySnapshot = await getDocs(collection(db, "Schedule"));
  //     querySnapshot.forEach((doc) => {
  //       // going throwgh each doc to get tha values
  //       let docData = doc.data();
  //       // convert firebase timestap to valid date
  //       let start = new Date(docData.start.seconds * 1000);
  //       let end = new Date(docData.end.seconds * 1000);
  //       tempData.push({
  //         title: docData.title,
  //         start: start,
  //         end: end,
  //         id: doc.id,
  //       });
  //     });
  //     setAllEvents(tempData);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="main-schedule">
      <h1>School Schedule</h1>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
};

export default Student_Schedule;
