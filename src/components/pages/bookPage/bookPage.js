import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../charDetails";
import ErrorMessage from "../../errorMessage";
import GotService from "../../../services/gotService";
import RowBlock from "../../rowBlock";


export default class BookPage extends Component {
    gotService = new GotService();
    state = {
        selectedBook: 1,
        error: false
    }

    onBookSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }
 
    render() {
        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                    onItemSelected={this.onBookSelected}
                    getData={this.gotService.getAllBooks}
                    renderItem={(item) => `${item.name} (${item.numberOfPages} pages)`}/>
        )

        const bookDetails = (
            <ItemDetails 
            itemId={this.state.selectedBook}
            getData={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number Of Pages'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={bookDetails}/>
        )
    }
}