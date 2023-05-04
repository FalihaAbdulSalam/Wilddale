import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div>
        <button onClick={toggleModal} className="btn-modal">
          <img
            src="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
            style={{ width: "200px", height: "200px" }}
          />
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img
                src="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
                style={{ width: "200px", height: "200px" }}
              />
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div> <div>
        <button onClick={toggleModal} className="btn-modal">
          <img
            src="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
            style={{ width: "200px", height: "200px" }}
          />
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img
                src="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
                style={{ width: "200px", height: "200px" }}
              />
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div> <div>
        <button onClick={toggleModal} className="btn-modal">
          <img
            src="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
            style={{ width: "200px", height: "200px" }}
          />
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img
                src="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
                style={{ width: "200px", height: "200px" }}
              />
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div> <div>
        <button onClick={toggleModal} className="btn-modal">
          <img
            src="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
            style={{ width: "200px", height: "200px" }}
          />
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <img
                src="https://www.themetechmount.com/wordpress/wilddale/wp-content/uploads/2021/07/post-13.jpg"
                style={{ width: "200px", height: "200px" }}
              />
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
