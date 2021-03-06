import { useState, useSelector } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import "./UserForm.css"

const UserForm = () => {
    const [userName, setUserName] = useState("")
    const [experience, setExperience] = useState("")
    const [email, setEmail] = useState("")

    const dispatch = useDispatch();

    return (
        <section className="forumAll">
            <form className="forumBody">
                <h1>User Form</h1>
                <div className="forumInput">
                    <input type="text" placeholder="Username" value={userName} onChange={e => setUserName(e.target.value)}></input>
                    <input type="number" placeholder="Experience" value={experience} onChange={e => setExperience(e.target.value)}></input>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <Link to={"/subjectSelect"}><button>Submit</button></Link>
            </form>
        </section>
    )
}

export default UserForm
