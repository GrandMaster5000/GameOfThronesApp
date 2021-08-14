import React, { Component } from "react";
import ItemList from "../itemList";
import ItemDetails, {Field} from "../charDetails";
import ErrorMessage from "../errorMessage";
import GotService from "../../services/gotService";
import RowBlock from "../rowBlock";


export default class CharacterPage extends Component {
    gotService = new GotService();
    state = {
        selectedChar: 130,
        error: false
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
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
                    onItemSelected={this.onCharSelected}
                    getData={this.gotService.getAllCharacters}
                    renderItem={(item) => `${item.name} (${item.gender})`}/>
        )

        const charDetails = (
            <ItemDetails 
            itemId={this.state.selectedChar}
            getData={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}