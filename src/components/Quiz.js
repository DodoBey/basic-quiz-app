import "./Quiz.css"

const Quiz = () => {
    return (
        <section className="quizArea">
            <div className="quizQuestion">
                <h3>Question 1</h3>
                <p>HTML means Hyper Text Mongo Language</p>
            </div>
            <div className="quizButtons">
                <button value="true">True</button>
                <button value="false">False</button>
            </div>
        </section>
    )
}

export default Quiz
