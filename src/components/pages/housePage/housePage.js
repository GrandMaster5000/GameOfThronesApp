import React, { Component } from "react";
import ItemList from "../../itemList";
import ItemDetails, {Field} from "../../charDetails";
import ErrorMessage from "../../errorMessage";
import GotService from "../../../services/gotService";
import RowBlock from "../../rowBlock";


export default class HousePage extends Component {
    gotService = new GotService();
    state = {
        selectedHouse: 130,
        error: false
    }

    onHouseSelected = (id) => {
        this.setState({
            selectedHouse: id
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
                    onItemSelected={this.onHouseSelected}
                    getData={this.gotService.getAllHouses}
                    renderItem={(item) => `${item.name} (${item.region})`}/>
        )

        const houseDetails = (
            <ItemDetails 
            itemId={this.state.selectedHouse}
            getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' link label='Ancestral Weapons'/>
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={houseDetails}/>
        )
    }
}