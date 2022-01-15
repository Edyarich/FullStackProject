import React from 'react';


class CalendarEvent extends React.Component {
    render() {
        const timeOptionsHM = {hour: 'numeric', minute: 'numeric'};
        const timeOptionsDM = {day: 'numeric', month: 'numeric'};
        const dateFrom = new Date(this.props.dateFrom);
        const dateTo = new Date(this.props.dateTo);

        const Description = this.props.verbose ?
            <p id="description"> {this.props.description} </p> : <></>;
        const eventStyle = {"border-right": this.props.verbose ? "1px ridge black" : "none",
                            "height": this.props.verbose ? "170px" : "130px"};
        const contentStyle = {"width": this.props.verbose ? "92%" : "75%"};
        const nameStyle = {"height": this.props.verbose ? "40px" : "35%"}

        return <div className="event" style={eventStyle}>
            <div className="date">
                <h3 id="date"> {dateFrom.toLocaleString("en", timeOptionsDM)} </h3>
            </div>
            <div className="content" style={contentStyle}>
                <h3 id="name" style={nameStyle}> {this.props.name}</h3>
                {Description}
                <p id="place"> {this.props.place}</p>
                <p id="time">
                    {dateFrom.toLocaleString("en", timeOptionsHM)} to
                    {" " + dateTo.toLocaleString("en", timeOptionsHM)}</p>
            </div>
        </div>;
    }
}

export default CalendarEvent;