import React from 'react'
import "./Operations.css"
import {Link} from "react-router-dom"
function Operations() {
    return (
        <div className="operations">
            <div className="row justify-content-center">
                <div className="card col-3 me-5 my-5">
                    <img src ="https://cdn.eventfinda.co.nz/images/list-with-eventfinda.png?r3iprq" alt="view-events" />
                    <h5>List your event with EventFunda</h5>
                    <div className="text">
                        <p>Get your listing to India's most entertainment fans.</p>
                    </div>
                    <Link to = "/events/add" className="btn btn-primary">Create Event</Link>
                </div>            
                <div className="card col-3 mx-5 my-5">
                    <img src ="https://cdn.eventfinda.co.nz/images/find-your-tickets.png?r3iprq" alt = "event-view"/>
                    <h5>View Current Events</h5>
                    <div className="text">
                        <p>Grow your audience with our integrated ticketing and marketing platform.</p>
                    </div>
                    <Link to = "/events/view" className="btn btn-primary mb-3"> View</Link>
                </div>            
            </div>
            
        </div>
    )
}

export default Operations
