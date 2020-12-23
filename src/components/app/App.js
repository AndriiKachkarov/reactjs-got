import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import './App.css'
import ErrorMessage from "../errorMassege/errorMessage";
import CharacterPage from "../characterPage/characterPage";


export default class App extends Component{

    state = {
        isRandomCharShown: true,
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    onToggleRandomChar = () => {
        this.setState({isRandomCharShown: !this.state.isRandomCharShown})
    };



    render() {
        const randomChar = this.state.isRandomCharShown ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row className='row'>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomChar}
                            <Button onClick={this.onToggleRandomChar}>Toggle random char</Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};

