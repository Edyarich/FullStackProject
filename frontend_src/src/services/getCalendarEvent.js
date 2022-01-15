import {getCalendarEventsURL, updateCalendarURL} from "../constants/links";


export async function getCalendarBatch() {
    let response = await fetch(getCalendarEventsURL, {'method': 'GET'})

    if (!response.ok) {
        throw new Error(`HTTP error; status: ${response.status}`);
    } else {
        return response.json()
    }
}

export const updateCalendar = () => fetch(updateCalendarURL)
    .then(elem => elem.json(), err => console.log(err))
