import React, {useState} from 'react'
import Calendar from "./Calendar.js"
import "../styles/components.css"
import {getCalendarBatch, updateCalendar} from "../services/getCalendarEvent";


class FullCalendar extends Calendar {
    constructor(props) {
        super(props);
        this.onScrollUpload = this.onScrollUpload.bind(this);
    }

    async componentDidMount() {
        await updateCalendar();
        const batch = await getCalendarBatch();
        this.setState({data: batch, is_exhausted: false});
        window.addEventListener("scroll", this.onScrollUpload);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScrollUpload);
    }

    async onScrollUpload() {
        if (this.state.is_exhausted) {
            this.componentWillUnmount();
            return;
        }
        const scrollFromTop = window.scrollY;
        const windowHeight = window.innerHeight
        const rootOffsetTop = document.documentElement.offsetTop;
        const rootOffsetHeight = document.documentElement.offsetHeight;
        const loadOffset = 100;

        if (rootOffsetTop + rootOffsetHeight - scrollFromTop - windowHeight < loadOffset) {
            try {
                const batch = await getCalendarBatch();
                this.setState((state) => {
                    return {data: [...state.data, ...batch], is_exhausted: false}
                });
            } catch (e) {
                this.setState((state) => {
                    return {data: state.data, is_exhausted: true}
                });
            }
        }
    }

    render() {
        return <div className="full_calendar">
            {super.render(true)}
        </div>
    }
}

export default FullCalendar;