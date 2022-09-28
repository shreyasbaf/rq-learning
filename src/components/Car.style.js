import styled from "styled-components";

export const CarWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    transition: all 0.5s linear 0s;
    margin: 8px 0;
    align-items: center;
    background-color: #79589FCC;
    color: white;
    p{
        padding: 12px;
        margin: 0;
    }
`;
export const CarDataWrapper = styled(CarWrapper)`
    background-color: transparent;
    color: #79589F;
    :hover{
        background-color: #79589FCC;
        color: white;
    }
`;