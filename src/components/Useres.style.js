import styled from "styled-components";

export const HeadingWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    transition: all 0.5s linear 0s;
    margin: 8px 0;
    align-items: center;
    p{
        padding: 12px;
        margin: 0;
    }
`;
export const Wrapper = styled(HeadingWrapper)`
    :hover{
        background-color: #79589FCC;
        color: white;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    border-radius: 4px;
    padding: 6px;
    font-size: 16px;
`;

export const Flexbox = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
`;

export const Button = styled.button`
    border: none;
    padding: 12px 24px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #79589F;
    color: white;
    transition: all 0.5s linear 0s;
    :hover{
        background-color: #4f3074;
    }
    :disabled{
        cursor: not-allowed;
    }
`;