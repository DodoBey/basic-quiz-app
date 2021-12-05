import "./Subject.css"

const Subject = () => {
    const clickHandler = (e) => {
        console.log(e)
    }
    return (
        <section className="subjectArea">
            <div className="subjectButtons">
                <h1>Select Subject</h1>
                <button value="html" onClick={(e) => clickHandler(e.target.value)}>HTML</button>
                <button value="css" onClick={(e) => clickHandler(e.target.value)}>CSS</button>
                <button value="javascript" onClick={(e) => clickHandler(e.target.value)}>Javascript</button>
                <button value="react" onClick={(e) => clickHandler(e.target.value)}>React</button>
                <button value="nodejs" onClick={(e) => clickHandler(e.target.value)}>NodeJS</button>
            </div>
        </section>
    )
}

export default Subject
