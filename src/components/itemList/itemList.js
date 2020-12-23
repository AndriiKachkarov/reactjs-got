import React, {Component} from 'react';
import './itemList.css';
import gotService from "../../services/gotService";
import Spinner from "../spinner/spinner";
export default class ItemList extends Component {

    state = {
        charList: null
    };

    gotService = new gotService();

    componentDidMount() {
        this.gotService.getAllChars()
            .then(charList => {
                this.setState({charList})
            });
    };

    renderItems = (charList) => {
        return charList.map((char) => {
            return (
                <li
                    key={char.id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelect(char.id)}
                >
                    {char.name}
                </li>
            );
        })
    };

    render() {

        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const chars = this.renderItems(charList);


        return (
            <ul className="item-list list-group">
                {chars}
            </ul>
        );
    }
}
