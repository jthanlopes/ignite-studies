import { ButtonContainer, ButtonVariant } from './Buttom.styles';

interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button = ({variant = 'primary'}: ButtonProps):JSX.Element => {
  return (
  <ButtonContainer
    variant={variant}
  >
    Enviar
  </ButtonContainer>
  )
}