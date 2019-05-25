import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';

function Score(props) {
    return (
        <Container>
            <Row>
                <Col as="h2" className="text-center scoreHeight align-self-center">
                    You scored {props.score} out of 10!
                </Col>
            </Row>
        </Container>
    )
}

Score.propTypes = {
    score: PropTypes.number.isRequired
}

Score.defaultProps = {
    score: 0
}

export default Score;