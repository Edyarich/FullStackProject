import CalendarEvent from "./CalendarEvent"
import "../styles/home_page.css"
import React from "react";

let calendar = [
    {
        id: 1,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "First Event",
        place: "Online",
    },
    {
        id: 2,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "Second Event",
        place: "Online",
    },
    {
        id: 3,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "Third Event",
        place: "Online",
    },
    {
        id: 4,
        dateFrom: new Date(2021, 9, 18, 19, 0),
        dateTo: new Date(2021, 9, 18, 20, 30),
        name: "Fourth Event",
        place: "Online",
    },
];

calendar = calendar.slice(-4);

class Calendar extends React.Component {
    render() {
        return <div className="calendar">
            <h2 id="title"> Club Calendar</h2>
            {calendar.map(elem=><CalendarEvent key={elem.id} item={elem} />)}
        </div>;
    }
}

export default Calendar;