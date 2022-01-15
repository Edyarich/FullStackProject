import React from 'react'
import {Link} from 'react-router-dom'


class EventTypeWindow extends React.Component {
    render() {
        return <div className="text_overlay">
            <Link to={this.props.link}>
                <img src={this.props.img} alt="Image"/>
                    <p className="overlay_title"> {this.props.title.toUpperCase()} </p>
            </Link>
        </div>
    }
}

export default EventTypeWindow;