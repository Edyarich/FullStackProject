import React from 'react';


class CalendarEvent extends React.Component {
    render() {
        const timeOptionsHM = {hour: 'numeric', minute: 'numeric'};
        const timeOptionsDM = {day: 'numeric', month: 'numeric'};
        const dateFrom = this.props.item.dateFrom;
        const dateTo = this.props.item.dateTo;

        return <div className="event">
            <div className="date">
                <h3 id="date"> {dateFrom.toLocaleString("en", timeOptionsDM)} </h3>
            </div>
            <div className="content">
                <h3 id="name"> {this.props.item.name}</h3>
                <p id="place"> {this.props.item.place}</p>
                <p id="time"> {dateFrom.toLocaleString("en", timeOptionsHM)} to
                    {dateTo.toLocaleString("en", timeOptionsDM)}</p>
            </div>
        </div>;
    }
}

export default CalendarEvent;