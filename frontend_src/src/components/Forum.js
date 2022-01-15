import React from "react";
import "../styles/forum.css"
import ForumTheme from "./ForumTheme";

let forum = [
    {
        id: 2,
        isClosed: true,
        date: new Date(2020, 10, 23),
        theme: "What books would you recommend to a beginner?",
        rootUser: "admin",
        lastUser: "vova228",
        repliesCount: 7,
        viewsCount: 145,
    },
    {
        id: 3,
        isClosed: false,
        date: new Date(2021, 11, 28),
        theme: "Who will you support in the fight for the chess crown?",
        rootUser: "user1",
        lastUser: "user100",
        repliesCount: 13,
        viewsCount: 243,
    }
];

class Forum extends React.Component {
    render() {
        return <div className="posts_table">
            <h1 id="title"> Forum </h1>

            <div className="table_head">
                <div className="status">Status</div>
                <div className="subjects">Subjects</div>
                <div className="replies">Replies/Views</div>
                <div className="last_reply">Last Reply</div>
            </div>

            {forum.map(elem=><ForumTheme key={elem.id} item={elem} />)}

            <div className="pagination">
                Pages: <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
            </div>
        </div>;
    }
}

export default Forum;