import React from 'react';
import PropTypes from 'prop-types';

const GetStarted = ({ title, ctaButton, subtitle }) => (
    <section className="py-24 bg-red-300">
        <div className="container">
            <div className="flex flex-col">
                <h1>{title}</h1>
                <a href="#">{ctaButton}</a>
                <p>{subtitle}</p>
            </div>
        </div>

    </section>
)

GetStarted.propTypes = {
    title: PropTypes.string.isRequired,
    ctaButton: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}


export default GetStarted