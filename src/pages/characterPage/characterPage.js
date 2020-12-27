import React, {Component} from 'react';
import './characterPage.css';
import gotService from "../../services/gotService";
import ErrorMessage from "../../components/errorMassege/errorMessage";
import ItemList from "../../components/itemList/itemList";
import ItemDetails from "../../components/itemDetails/itemDetails";
import Field from "../../components/field/field";
import RowBlock from "../../components/rowBlock/rowBlock";



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
