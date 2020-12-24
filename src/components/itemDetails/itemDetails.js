import React, {Component} from 'react';
import './itemDetails.css';

export default class ItemDetails extends Component {


    state = {
        item: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem()
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then(item => {
                this.setState({item});
            })
    }

    getLines = () => {

        return Object.entries(this.state.item).map(prop => {
            return prop[0] === 'name' || prop[0] === 'id' ? null : (
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">{prop[0]}</span>
                    <span>{prop[1]}</span>
                </li>
            )
        }
    )
    };

    render() {



        if (!this.state.item) {
            return <span className='select-error'>Please select a character</span>
        }

        const lines = this.getLines();

        const {name} = this.state.item;
        const {item} = this.state;
        return (
            <div className="item-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, child => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}
