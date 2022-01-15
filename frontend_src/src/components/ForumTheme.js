import React from 'react';


class ForumTheme extends React.Component {
    render() {
        const timeOptionsDMY = {month: 'long', day: 'numeric', year: 'numeric'};
        const date = this.props.item.date;
        const isClosed = this.props.item.isClosed;
        const statusStyle = {color: isClosed ? "#fc5c65" : "#00b894"};
        const statusString = isClosed ? "Closed" : "Opened"

        return <div className="table_row">
            <div className="status" style={statusStyle}> {statusString} </div>
            <div className="subjects">
                <a href=""> {this.props.item.theme} </a>
                <br/>
                <span>Started by: <b><a href=""> {this.props.item.rootUser} </a></b></span>
            </div>
            <div className="replies">
                {this.props.item.repliesCount} replies <br/>
                {this.props.item.viewsCount} views
            </div>

            <div className="last_reply">
                {date.toLocaleString("en", timeOptionsDMY)}<br/>
                By <b><a href=""> {this.props.item.lastUser} </a></b>
            </div>
        </div>;
    }
}

export default ForumTheme;