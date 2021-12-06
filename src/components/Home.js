import { Link } from "react-router-dom";
import "./Home.css"
import questions from "../store/Questions"
const Home = () => {

    const question = questions
    console.log(question)
    return (
        <section className="mainBody">
            <div className="welcomeArea">
                <h1>Welcome to Quiz!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia congue dui, in aliquet lorem tincidunt sed. In vestibulum maximus.</p>
                <button>How to Play?</button>
                <Link to={"/userForm"}><button>Start!</button></Link>
            </div>
        </section>
    )
}


export default Home;
