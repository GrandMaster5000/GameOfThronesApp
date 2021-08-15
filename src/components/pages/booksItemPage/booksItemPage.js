import React, { Component } from "react";
import GotService from "../../../services/gotService";
import ItemDetails, {Field} from "../../charDetails";


export default class BooksItem extends Component {
    gotService = new GotService();
    render() {
        return(
            <ItemDetails 
            itemId={this.props.bookId}
            getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}


