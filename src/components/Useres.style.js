import styled from "styled-components";

export const HeadingWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
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
export const Wrapper = styled(HeadingWrapper)`
    background-color: transparent;
    color: #79589F;
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
    border: 1px solid #79589FCC;
    color: #4f3074;
    :focus{
        border: 2px solid #79589FCC;
        outline: none;
    }
    ::placeholder{
        color: #4f3074;
    }
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

export const Dropdown = styled.select`
  cursor: pointer;
  width: 180px;
  border-radius: 6px;
    padding: 6px;
    font-size: 16px;
    color: #4f3074;
    border: 1px solid #79589FCC;
    :focus{
        border: 2px solid #79589FCC;
        outline: none;
    }
`;