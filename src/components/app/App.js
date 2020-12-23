import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import './App.css'


export default class App extends Component{

    state = {
        isRandomCharShown: true
    }

    onToggleRandomChar = () => {
        this.setState({isRandomCharShown: !this.state.isRandomCharShown})
    };

    render() {
        const randomChar = this.state.isRandomCharShown ? <RandomChar/> : null;

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
                    <Row className='row'>
                        <Col md='6'>
                            <ItemList/>
                        </Col>
                        <Col md='6'>
                            <CharDetails/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};

