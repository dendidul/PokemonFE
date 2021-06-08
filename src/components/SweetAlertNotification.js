/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import PropTypes from 'prop-types';

const SweetAlertNotification = ({ content }) => {
  const [notif, setnotif] = useState(false);

  return (

    <SweetAlert
      type={content.notiftype}
      show={content.isshow}
      // title={content.message}

      onConfirm={() => {
        setnotif(false);
        window.location.href = content.OnConfirmUrl;
      }}
      onCancel={() => {
        setnotif(false);
        window.location.href = content.url;
      }}
      onEscapeKey={() => {
        setnotif(false);
        window.location.href = content.url;
      }}
      onOutsideClick={() => {
        setnotif(false);
        window.location.href = content.url;
      }}
    >
      <p style={{ fontSize: '13pt' }}>{content.message}</p>
      {' '}
    </SweetAlert>
  );
};

SweetAlertNotification.propTypes = {
  content: PropTypes.object.isRequired,
};

export default SweetAlertNotification;
