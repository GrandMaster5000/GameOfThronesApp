import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 10px;
    background-color: blue;
    border-radius: 5px;
    border: none;
    color: white;
    margin-bottom: 20px;
`;

export default class ButtonToggle extends Component {
    render() {
        return (
            <Button onClick={() => this.props.onToggleChar()}>Toggle random character</Button>
        )
    }
}