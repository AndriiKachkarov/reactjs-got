import React, {Component} from 'react';
import './characterPage.css';
import ItemList from "../itemList/itemList";
import ItemDetails from "../itemDetails/itemDetails";
import ErrorMessage from "../errorMassege/errorMessage";
import gotService from "../../services/gotService";
import RowBlock from "../rowBlock/rowBlock";
import Field from "../field/field";



export default class CharacterPage extends Component {

    state = {
        selectedChar: 130,
        error: false
    };

    gotService = new gotService();

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    onItemSelect = (id) => {
        this.setState({selectedChar: id})
    };




    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList
                onItemSelect={this.onItemSelect}
                getData={this.gotService.getAllChars}
                renderItem={(item => `${item.name} (${item.gender})`)}
            />
        );

        const charDetails = (
            <ItemDetails
                itemId={this.state.selectedChar}
                getData={this.gotService.getChar}
            >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        );

        return <RowBlock
            left={itemList}
            right={charDetails}
        />
    }
}
