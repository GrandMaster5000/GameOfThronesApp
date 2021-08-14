import React, {Component} from 'react';
import styled from 'styled-components';


const CharDetail = styled.div`
     background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    h4 {
        margin-bottom: 20px;
        text-align: center;
    }
`;
const Term = styled.span`
    font-weight: bold;
`;
const SelectError = styled.span`
    font-weight: bold;
    color: white;
    font-size: 30px;

`;


const Field = ({item, field, label, link}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <Term className="term">{label}</Term>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field}
export default class ItemDetails extends Component {
    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        if(!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        if(!this.state.item) {
            return <SelectError>Please select a character</SelectError>
        }

        const {item} = this.state,
        {name} = item;

        return (
            <CharDetail>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item});
                        })
                    }
                </ul>
            </CharDetail>
        );
    }
}