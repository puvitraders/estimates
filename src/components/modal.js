import { useState } from "react";
import { GrClose } from "react-icons/gr";

const Modal = ({ isOpen = false, children, closeButton = true }) => {
  const [show, toggle] = useState(isOpen);

  return (
    <>
      {show && (
        <div className="m-container">
          <div className="m-content">
            {closeButton && (
              <div className="m-close">
                <button className="btn" onClick={toggle.bind(null, false)}>
                  <GrClose />
                </button>
              </div>
            )}

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
