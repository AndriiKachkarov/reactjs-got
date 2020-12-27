import React, {Component} from 'react';
import './housePage.css';
import gotService from "../../services/gotService";
import ErrorMessage from "../../components/errorMassege/errorMessage";
import ItemList from "../../components/itemList/itemList";
import ItemDetails from "../../components/itemDetails/itemDetails";
import Field from "../../components/field/field";
import RowBlock from "../../components/rowBlock/rowBlock";



export default class HousePage extends Component {

    state = {
        selectedHouse: 10,
        error: false
    };

    gotService = new gotService();

    componentDidCatch(error, errorInfo) {
        this.setState({error: true});
    }

    onItemSelect = (id) => {
        this.setState({selectedHouse: id})
    };




    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList
                onItemSelect={this.onItemSelect}
                getData={this.gotService.getAllHouses}
                renderItem={(item => item.name)}
            />
        );

        const houseDetails = (
            <ItemDetails
                itemId={this.state.selectedHouse}
                getData={this.gotService.getHouse}
            >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>

            </ItemDetails>
        );

        return <RowBlock
            left={itemList}
            right={houseDetails}
        />
    }
}
