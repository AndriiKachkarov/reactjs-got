import React, {Component} from 'react';
import './bookItem.css';
import gotService from "../../services/gotService";
import ItemDetails from "../../components/itemDetails/itemDetails";
import Field from "../../components/field/field";

export default class BookItem extends Component {
    gotService = new gotService();

    render() {
        return (
          <ItemDetails
            itemId={this.props.bookId}
            getData={this.gotService.getBook}
          >
              <Field field='numberOfPages' label='Number of Pages'/>
              <Field field='publisher' label='Publisher'/>
              <Field field='released' label='Released'/>

          </ItemDetails>
        );
    }

}


