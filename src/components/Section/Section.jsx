import PropTypes from 'prop-types';
import { Title, Container } from './Section.styled';
export const Section = ({ title, children }) => {
    return (
        <Container>
        <Title>{title}</Title>
        {children}
        </Container>
        
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}