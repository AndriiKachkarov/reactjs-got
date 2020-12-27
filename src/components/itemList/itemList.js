import React, {Component} from 'react';
import './itemList.css';
import PropTypes from "prop-types";
import withData from "../../hoc/withData";

class ItemList extends Component {

    static propTypes = {
        onItemSelect: PropTypes.func
    };

    static defaultProps = {
        onItemSelect: () => {}
    };



    renderItems = (itemList) => {
        return itemList.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelect(id)}
                >
                    {label}
                </li>
            );
        })
    };

    render() {

        const {data} = this.props;
        const items = this.renderItems(data);


        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

export default withData(ItemList);

