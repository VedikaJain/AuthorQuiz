import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';

class Question extends React.Component {
    constructor(props) {
        super(props);
        props.answer("none");
        this.btn = React.createRef();
    }
    chooseAnswer = (idAnswer) => {
        this.btn.current.children[idAnswer].classList.remove("btn-outline-primary");
        if (idAnswer === this.props.question.correct - 1) {
            this.btn.current.children[idAnswer].classList.add("btn-success");
            this.props.answer("correct");
        } else {
            this.btn.current.children[idAnswer].classList.add("btn-danger");
            this.props.answer("incorrect");
        }
        this.btn.current.classList.add("no-click");
    }
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col className="p-0" md={{span:3, offset:1}} sm={{span:3, offset:1}} xs={{span:3, offset:1}} lg={{span:3, offset:1}}>
                        <img src={process.env.PUBLIC_URL + this.props.question.img} alt="Author" className="image"/>
                    </Col>
                    <Col className="align-self-center p-0" md={{span:6, offset:1}} sm={{span:6, offset:1}} xs={{span:6, offset:1}} lg={{span:6, offset:1}}>
                        <ButtonGroup ref={this.btn} vertical>
                        {this.props.question.options.map(
                            (option, idAnswer)=>
                                <Button
                                    variant="outline-primary"
                                    key={idAnswer} 
                                    onClick={()=>this.chooseAnswer(idAnswer)}
                                >
                                {option}
                                </Button>
                        )}
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

Question.propTypes = {
    key: PropTypes.number.isRequired,
    question: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
        correct: PropTypes.number.isRequired
    }),
    answer: PropTypes.func
}

Question.defaultProps = {
    key: 0,
    question: {
        id: 1,
        img: "./assets/marktwain.png",
        options: ["Adventures of Huckleberry Finn", "Harry Potter and the Half Blood Prince", "Song of Ice and Fire", "Jonathan Livingston Seagull"],
        correct: 1
    },
    answer: () => {
        return "none";
    }
}

export default Question;