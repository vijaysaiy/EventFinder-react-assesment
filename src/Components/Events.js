import React from "react";
import { deleteEvent } from "../server-api/apiCalls";

function Events({ items, button,setItem,setScreen }) {
  function handleDelete(id) {
    deleteEvent(id);
    window.location.reload(true);
  }
  function handleEdit(){
    setItem(items)
    setScreen("edit")
  }
  return (
    <div class="card col-2 me-2 my-2">
      <img src={items.imgSrc} class="card-img-top" alt="Event" />
      <div class="card-body">
        <h5 class="card-title">{items.name}</h5>
        <p class="card-text">{items.place}</p>
        <p class="card-text">{items.time}</p>
        {button && <button className="btn btn-warning me-2" onClick ={()=>handleEdit()}>Edit</button>}
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
  );
}

export default Events;
