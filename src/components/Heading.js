import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'

const Heading = ({ content }) => {
  return (
    <div className="section-heading">
      <div className="d-flex justify-content-between">
        <p className={classnames("section-title", {
          "section-title-white": content.headingColor === 'white',
          "section-title-violet": content.headingColor === 'violet',
          "section-title-uppercase": content.headingLetters === 'uppercase',
        })}
        >{content.heading}</p>
        <Link to={content.url || ''} className="see-all-link">{content.linkName}</Link>
      </div>
    </div>
  );
};

export default Heading;