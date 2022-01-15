import "../styles/about_us.css"
import {createContact} from "../services/createContact"

import vkLogo from "../images/vk_logo.png"
import youtubeLogo from "../images/youtube_bw_logo.png"
import instLogo from "../images/inst_bw_logo.png"

import * as Info from '../constants/contactInfo'
import * as Links from '../constants/links'

import React from "react";


function AboutUs() {
    return <div className="about_us">
        <div className="yandex_map">
            <iframe src={Links.yandexMap} title='YandexMap'>
            </iframe>
        </div>

        <div className="contact_info">
            <p id="title"> Contact Info </p>
            <p id="text">
                <u>Address</u>: {Info.address} <br/>
                <u>Email</u>: {Info.eMail} <br/>
                <u>Telephone</u>: {Info.mobilePhone} <br/>
                <br/>
                <u>Operating mode</u>: <br/>
                {Info.operatingMode.map(elem=><div>
                    {elem.day}:{elem.time}<br/>
                </div>)}
                <br/>
                <u>Subscribe to us</u>:
                <a href={Links.vkLink} hrefLang="en">
                    <img src={vkLogo} alt="vk_logo" id="vk_logo"/>
                </a>
                <a href={Links.youtubeLink}>
                    <img src={youtubeLogo} alt="youtube_logo" id="youtube_logo"/>
                </a>
                <a href={Links.instagramLink}>
                    <img src={instLogo} alt="inst_logo" id="inst_logo"/>
                </a>
            </p>
        </div>

        <div className="contact_form">
            <p id="title"> Contact Form </p>
            <form id="add_form" autoComplete="off" onSubmit={e=>{
                e.preventDefault();
                const formData = new FormData(e.target);
                createContact(Object.fromEntries(formData));

                for (let i = 0; i < 4; ++i) {
                    e.target[i].value = "";
                }
            }}>
                <input id="name_input" name="name" placeholder="Your Name" required/> <br/>
                <input id="phone_input" name="phone_number" placeholder="Phone Number" required/> <br/>
                <input id="email_input" name="email" placeholder="Email Address" required/> <br/>
                <textarea id="msg_input" name="comment" form="add_form" placeholder="Comment"
                          maxLength="500" required/> <br/>
                <button id="form_button" form="add_form">Send</button>
            </form>
        </div>
    </div>
}

export default AboutUs;