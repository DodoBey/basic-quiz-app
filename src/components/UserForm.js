import { Link } from "react-router-dom"
import "./UserForm.css"

const UserForm = () => {
    return (
        <section className="forumAll">
            <form className="forumBody">
                <h1>User Form</h1>
                <div className="forumInput">
                    <input type="text" placeholder="Username"></input>
                    <input type="number" placeholder="Age"></input>
                    <input type="email" placeholder="Email"></input>
                </div>
                <Link to={"/subjectSelect"}><button>Submit</button></Link>
            </form>
        </section>
    )
}

export default UserForm
