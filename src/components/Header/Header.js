import "./Header.css"
import { MdLeaderboard } from "react-icons/md"
import Logo from "../../images/quiz.png"
import { useNavigate } from "react-router-dom"

const Header = () => {
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
                <button onClick={clickHandler} className="headerButton"><MdLeaderboard /></button>
                <span onClick={clickHandler}>Leaderboard</span>
            </div>
        </header>
    )
}

export default Header
