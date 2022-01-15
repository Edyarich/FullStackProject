import {getCalendarHeadURL} from "../constants/links";
import {calendarEventsAtHome} from "../constants/magic"


export const getCalendarHead = () => fetch(getCalendarHeadURL + calendarEventsAtHome + '/',
    {'method': 'GET'}
)
.then(elem => elem.json(), err => console.log(err))
