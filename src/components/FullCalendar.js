import React from 'react'
import Calendar from "./Calendar.js"
import "../styles/components.css"


class FullCalendar extends Calendar {
    render() {
        return <div>
            <div className="full_calendar">
                {super.render(true)}
            </div>

            <div className="pagination">
                Pages: <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
            </div>
        </div>
    }
}

export default FullCalendar;