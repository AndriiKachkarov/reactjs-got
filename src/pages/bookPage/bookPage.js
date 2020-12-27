import React, {Component} from 'react';
import './bookPage.css';
import gotService from "../../services/gotService";
import ItemList from "../../components/itemList/itemList";
import {withRouter} from "react-router-dom";

class BookPage extends Component {

    state = {
        error: false
    };

    gotService = new gotService();

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }



    render() {

        return (
            <ItemList
                onItemSelect={(itemId) => {
                    this.props.history.push(itemId);
                }}
                getData={this.gotService.getAllBooks}
                renderItem={(item => item.name)}
            />
        )
    }
}

export  default withRouter(BookPage);
