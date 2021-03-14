import React from 'react';
import PropTypes from 'prop-types';

const Service = ({ icon, children }) => (

    <div className="text-center space-y-6">
        <i className={`text-8xl text-blue-700 ${icon}`}></i>
        <p className="uppercase text-xs tracking-widest text-white font-display">{children}</p>
    </div>
)

Service.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}

export default Service;

