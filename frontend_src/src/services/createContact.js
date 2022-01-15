import {getContactURL} from "../constants/links";

export const createContact = (data)=>fetch(getContactURL,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
)
.then(data=>data.json(), err=>console.log(err));
