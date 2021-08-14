import React from "react";
import styled from "styled-components";

const Error = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: red;
`;

const ErrorMessage = () => {
    return <Error>Something goes wrong</Error>
}

export default ErrorMessage;