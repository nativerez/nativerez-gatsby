import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Button = ({ children, to }) => (

<Link className="inline-block my-3 my-md-5 rounded px-6 py-3 bg-white hover:bg-gray-100 hover:text-gray-900 font-display text-sm" to={to}>
{children}
</Link>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Button;