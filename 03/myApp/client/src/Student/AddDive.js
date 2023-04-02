import "./AddDive.css";
import { useEffect, useState } from "react";
import { useApiContext } from "../hooks/useApiContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [date, setDate] = useState("");
  const [site, setSite] = useState("");
  const [equipment, setEquipment] = useState("");
  const [dive_duration, setDiveDuration] = useState("");
  const [depth, setDepth] = useState("");
  const [note, setNote] = useState("");

  // for connection
  const { apiCall } = useApiContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await apiCall("dives");
        console.log(data?.dives);
        setDate(data.date);
        setSite(data.site);
        setEquipment(data.equipment);
        setDiveDuration(data.dive_duration);
        setDepth(data.depth);
        setNote(data.note);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const notify = () => {
    toast.success("Upload was successful!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    toast.info(
      "Waiting for the instructors approval. You can update later in the app",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
  };

  async function handleAddDive() {
    try {
      const { data } = await apiCall("dives", "POST", {
        date: date,
        site: site,
        equipment: equipment,
        duration: dive_duration,
        depth: depth,
        note: note,
        user: user._id,
      });
      console.log(data.dive);
    } catch (error) {
      console.log(error);
    }
    notify();
    setDate("");
    setSite("");
    setEquipment("");
    setDiveDuration("");
    setDepth("");
    setNote("");
  }

  return (
    <div>
      <div className="main-AddDive">
        <div>
          Date:{" "}
          <input
            type="Date"
            required={true}
            className="block"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          Site:{" "}
          <input
            type="text"
            required={true}
            className="block"
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />
          Special equipment:{" "}
          <input
            type="text"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
          />
        </div>
        <div>
          Dive duration (minutes):{" "}
          <input
            type="number"
            required={true}
            className="block"
            value={dive_duration}
            onChange={(e) => setDiveDuration(e.target.value)}
          />
          Depth (m) ={" "}
          <input
            type="number"
            required={true}
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
          />
        </div>
        <div>
          Note:
          <br />
          <textarea
            rows="4"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
        <button className="neon-btn" onClick={handleAddDive}>
          Add Dive
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
