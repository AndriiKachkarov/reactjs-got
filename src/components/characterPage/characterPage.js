import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import './characterPage.css';
import ItemList from "../itemList/itemList";
import CharDetails from "../charDetails/charDetails";
import ErrorMessage from "../errorMassege/errorMessage";

export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    onCharSelect = (id) => {
        this.setState({selectedChar: id})
    };

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <Row className='row'>
                <Col md='6'>
                    <ItemList
                        onCharSelect={this.onCharSelect}
                    />
                </Col>
                <Col md='6'>
                    <CharDetails
                        charId={this.state.selectedChar}
                    />
                </Col>
            </Row>
        );
    }
}
