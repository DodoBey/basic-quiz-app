import { Modal, Button } from "react-bootstrap"


const HowToPlay = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    How To Play?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Submit your user information and select the subject that you want to test yourself! There ara gonna be 10 questions for you. Each question has 10 points and based on your correct you will collect points. Try to give as more correct answer as you can! Good luck!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default HowToPlay
