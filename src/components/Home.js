import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import HowToPlay from "./HowToPlay";

const Home = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <section className="mainBody">
            <div className="welcomeArea">
                <h1>Welcome to Quiz!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia congue dui, in aliquet lorem tincidunt sed. In vestibulum maximus.</p>
                <button onClick={() => setModalShow(true)}>How to Play?</button>
                <Link to={"/userForm"}><button>Start!</button></Link>
                <HowToPlay
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </section>
    )
}


export default Home;
