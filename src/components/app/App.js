import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import './App.css'
import ErrorMessage from "../errorMassege/errorMessage";
import CharacterPage from "../../pages/characterPage/characterPage";
import HousePage from "../../pages/housePage/housePage";
import BookPage from "../../pages/bookPage/bookPage";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BookItem from "../../pages/bookItem/bookItem";


export default class App extends Component {

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
            <Router>
                <div className='app'>
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
                        <Route path='/' exact component={() => <h1>Welcome to GOT</h1>}/>
                        <Route path='/characters' component={CharacterPage}/>
                        <Route path='/houses' component={HousePage}/>
                        <Route path='/books' exact component={BookPage}/>
                        <Route path='/books/:id' render={({match}) => {
                            const {id} = match.params;
                            return <BookItem bookId={id}/>
                        }}/>
                    </Container>
                </div>
            </Router>
        );
    }
};

