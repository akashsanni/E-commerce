import React from 'react'
import "./CardPopup.css"
const cardPopup = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';

  return (
    <div className={showHideClassName}>
      <section className="popup-main">
        <>sdflk</>
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default cardPopup;