import { ImSpinner2 } from 'react-icons/im'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const StyledSpinner = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
`

export const Spinner = ({ fontSize, className, style }) => {
  return (
    <StyledSpinner className={className} style={style}>
      <ImSpinner2
        fontSize={fontSize}
        color='#79589F'
      />
    </StyledSpinner>
  )
}
