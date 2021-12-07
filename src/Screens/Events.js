import React, { useState } from "react";
import CreateEvent from "../Components/CreateEvent";
import EditEvent from "../Components/EditEvents";
import EventList from "../Components/EventList";

function Events() {
  const [screen, setScreen] = useState("list");
  const [item, setItem] = useState([]);
  return (
    <>
      <div className="options">
        <div className="col my-5">
          <buttion className="btn btn-primary me-5 mx-5" onClick={() => setScreen("list")}>
            View
          </buttion>
          <buttion className="btn btn-success" onClick={() => setScreen("add")}>
            Add
          </buttion>
        </div>
      </div>
      {screen === "list" && <EventList setScreen={setScreen} setItem={setItem} />}
      {screen === "edit" && <EditEvent item={item} />}
      {screen === "add" && <CreateEvent />}
    </>
  );
}

export default Events;
