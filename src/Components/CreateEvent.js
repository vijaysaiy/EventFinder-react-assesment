import React, { useState } from "react";
import { addEvent } from "../server-api/apiCalls";

function CreateEvent() {
  let initialValues = { name: "", imgSrc: "", place: "", date: "" };
  const [details, setDetails] = useState(initialValues);
  function handleChange(event){
      let name = event.target.name;
      let value = event.target.value;
      let id = Math.random();
      setDetails({...details,id,[name]:value})
  }
  function handleSubmit(){
    addEvent(details);
    alert("Event created successfully")
  }
  return (
    <>
      <h3 className="text-center my-5">Create Event</h3>
      <div className="container card my-5" style={{ maxWidth: "50vw" }}>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Event Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Event name"
              name = "name"
              value={details.name}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Image</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Image url"
              name ="imgSrc"
              value={details.imgSrc}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">place</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Place"
              name ="place"
              value={details.place}
              onChange={handleChange}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Time and Date</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter Time and Date"
              name ="date"
              value={details.date}
              onChange={handleChange}
            />
          </div>
          <button type="button" class="btn btn-primary mb-3" onClick = {handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateEvent;
