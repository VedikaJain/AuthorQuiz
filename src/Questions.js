import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Question from './Question';
import questionslist from './questionslist.js';
import Score from './Score';
import PropTypes from 'prop-types';

class Questions extends React.Component {
    totalQuestions = questionslist.length;
    constructor(props) {
        super(props);
        this.state = {
            questionId: 0,
            showContinue: false,
            score: 0
        }
    }
    calcScore = (ans) => {
        if(ans==="correct") {
            this.setState(()=>{ return {score: this.state.score+1}});
            this.setState({showContinue: true});
        } else if(ans==="incorrect") {
            this.setState({showContinue: true});
        } else {
            this.setState({showContinue: false});
        }
    }
    setQuestionId = () => {
        this.setState(() => {
            return {questionId: this.state.questionId+1}
        }, ()=>{
            if (this.state.questionId === this.totalQuestions) { 
                this.props.gameOver(true);
            }
        });
    }
    render() {
        return (
            <Container fluid={true}>
                { this.state.questionId<this.totalQuestions && (
                <Row>
                    <Col as={Question} 
                         key={this.state.questionId} 
                         question={questionslist[this.state.questionId]}
                         answer={(ans) => this.calcScore(ans)}
                    ></Col>
                </Row>
                ) }
                { this.state.questionId===this.totalQuestions && (
                <Row>
                    <Col as={Score} score={this.state.score}></Col>
                </Row>
                ) }
                { this.state.showContinue && this.state.questionId!==this.totalQuestions && (
                <Row >
                    <Col className="p-0" md={{ span:2, offset: 9 }} xs={{ span:10, offset: 1 }} sm={{ span:10, offset: 1 }} lg={{ span:2, offset: 9 }}>
                        <Button block onClick={this.setQuestionId}>Continue</Button>
                    </Col>
                </Row>
                ) }
            </Container>
        )
    }
}

Questions.propTypes = {
    key: PropTypes.number.isRequired,
    gameOver: PropTypes.func
}

Questions.defaultProps = {
    key: 0,
    gameOver: () => {
        return false;
    }
}

export default Questions;