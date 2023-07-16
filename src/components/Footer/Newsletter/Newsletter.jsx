import { useContext, useState } from "react";
import "./Newsletter.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { Context } from "../../../utils/context";
import { MdOutlineDoneAll } from 'react-icons/md'
import {ImCross} from 'react-icons/im'


const Newsletter = () => {
    const { handleAlert } = useContext(Context)
    const [user, setUser] = useState({
        email: "",
    });



    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const postData = async (e) => {
        e.preventDefault()
        if (user.email) {
            const res = await fetch("https://shopimartsubscriber-default-rtdb.firebaseio.com/shopimartsubscriber.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: user.email,
                })
            })

            setUser(res)
            handleAlert("You have Subscribed Successfully", (<MdOutlineDoneAll />))
            if (res) {
                setUser({
                    email: "",
                });
            }

        }
        else {
            handleAlert("Please Fill The Inputs", (<ImCross/>))
        }
    }


    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <div className="newsletter-formcontet">
                    <span className="small-text">NewsLetter</span><br />
                    <span className="big-text">
                        Sign Up for latest updates and offer
                    </span>
                    <form className="form" method="POST" >
                        <input type="email" name="email" placeholder="Email Address" value={user.email} onChange={handleOnChange} />
                        <button onClick={postData}>Subscribe</button>
                    </form>
                </div>
                <div className="text">Will be used in accordance with our Privacy Policy</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF />
                    </div>
                    <div className="icon">
                        <FaInstagram />
                    </div>
                    <div className="icon">
                        <FaTwitter />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;
