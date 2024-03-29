import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: none;
  margin: 8px;

  font-size: 0.875rem;
  font-weight: bold;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}`
  }} */
`
