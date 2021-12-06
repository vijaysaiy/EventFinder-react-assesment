import { React, useState, useEffect } from "react";
import { getAllEvents,deleteEvent  } from "../server-api/apiCalls";


function EventList({ setItem, setScreen }) {
  const [events, setEvents] = useState([]);
  let button = true;
  function handleDelete(id) {
    deleteEvent(id);
    window.location.reload(true);
  }
  function handleEdit(items){
    setItem(items)
    setScreen("edit")
  }
  useEffect(() => {
    const getEvents = async () => {
      const data = await getAllEvents();
      if (data) setEvents(data);
    };
    getEvents();
  }, []);
  return (
    <div className="container" style={{ maxWidth: "1500px" }}>
      <h1 className="title my-5">All Events </h1>
      <div className="row justify-content-center">
        {events.map((items) => {
          return (
            <>
              <div class="card col-2 me-2 my-2">
                <img
                  src={items.imgSrc}
                  class="card-img-top"
                  alt="Event"
                />
                <div class="card-body">
                  <h5 class="card-title">{items.name}</h5>
                  <p class="card-text">{items.place}</p>
                  <p class="card-text">{items.time}</p>
                  {button && (
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEdit(items)}
                    >
                      Edit
                    </button>
                  )}
                  {button && (
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(items.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default EventList;
