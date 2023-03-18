import { StyledLink } from './LinkButton.styled'

interface LinkButtonProps {
  link: string
  label: string
}

export const LinkButton = ({ link, label }: LinkButtonProps) => (
  <StyledLink to={link}>{label}</StyledLink>
)

export default LinkButton
