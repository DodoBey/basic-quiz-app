import "./Footer.css"
import { FaGithubSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="footerAll">
            <div className="footerCopy">
                &copy; Dodobey Project - 2021
            </div>
            <div className="footerSocial">
                <a href="https://github.com/DodoBey" target="_blank"><FaGithubSquare style={{ margin: "0 10px" }} /></a>
                <a href="https://www.linkedin.com/in/dogukanyigiter/" target="_blank"><FaLinkedin style={{ margin: "0 10px" }} /></a>
                <a href="https://www.instagram.com/dgknygtr/" target="_blank"><FaInstagramSquare style={{ margin: "0 10px" }} /></a>
                <a href="https://www.youtube.com/channel/UCDkEB0qVYDEn7mcwBkJOsfA" target="_blank"><FaYoutubeSquare style={{ margin: "0 10px" }} /></a >
            </div>
        </footer>
    )
}

export default Footer
