import "./Header.css"
import { MdLeaderboard } from "react-icons/md"
import Logo from "../../images/quiz.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Leaderboard from "../Leaderboard"

const Header = () => {

    const [modalShow, setModalShow] = useState(false);

    let navigate = useNavigate();
    const clickHandler = () => {
        console.log("clicked")
    }

    return (
        <header className="headerAll">
            <div className="headerLogo">
                <img src={Logo} onClick={() => { navigate("/") }} />
            </div>
            <div className="headerButtonArea">
                <button onClick={() => setModalShow(true)} className="headerButton"><MdLeaderboard /></button>
                <span onClick={() => setModalShow(true)}>Leaderboard</span>
            </div>
            <Leaderboard
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </header>
    )
}

export default Header
