import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Quiz.css';
import Button from 'react-bootstrap/Button';
import Questions from './Questions';
import Jumbotron from 'react-bootstrap/Jumbotron';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: 0,
      newGame: false
    }
  }
  resetGame = () => {
    this.setState((state)=>({
      quiz : state.quiz + 1,
      newGame : false
    }))
  }
  render() {
    return (
      <Container fluid={true}>
        <Jumbotron className="text-center col-lg-10 col-md-10 col-sm-10 col-10 offset-lg-1 offset-md-1 offset-sm-1 offset-1">
          <h1>Author Quiz</h1>
          <i>Select the book written by author shown</i>
        </Jumbotron>
        <Row>
          <Col as={Questions} key={this.state.quiz} gameOver={(game) => this.setState({newGame: game})}/>
        </Row>
        { this.state.newGame && (
        <Row>
            <Col className="text-center" md={{span:4, offset:4}}>
                <Button onClick={this.resetGame}>Play Again!</Button>
            </Col>
        </Row>
        )}
      </Container>
    );
  }
}

export default Quiz;