import PropTypes from 'prop-types';
import {Section} from './Section.styled'
export const SectionPart = ({ title, children }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}
      {children}
    </Section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};