import "../styles/home_page.css"
import chessBoard from "../images/chessboard.jpg"
import Calendar from "./Calendar";
import * as Constants from '../constants/contactInfo'


function HomePage() {
    return <div>
        <img src={chessBoard} id="home_chessboard" alt="home_chessboard"/>
        <div className="info">
            <Calendar/>
            <div className="invitation">
                <p id="title"> {Constants.invitationHead.toUpperCase()} </p>
                <p id="text"> {Constants.invitationMessage.toUpperCase()}</p>
            </div>

            <div className="contact_info">
                <p id="title"> {Constants.mobilePhone} </p>
                <p id="text"> {Constants.address.toUpperCase()} <br/>
                    <br/>E-MAIL: {Constants.eMail.toUpperCase()}
                </p>
            </div>

            <div className="motivation">
                <p id="title"> {Constants.motivationHead}</p>
                <h3 id="text"> {Constants.motivationMessage}</h3>
            </div>
        </div>
    </div>;
}

export default HomePage;