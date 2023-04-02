import React from "react";
import "./DialogBox.css";

export default function Dialog({
  dive,
  show,
  title,
  description,
  confirm,
  cancel,
}) {
  if (!show) {
    return <></>;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          confirm(dive);
        }}
      >
        <div className="overlay">
          <div className="dialog">
            <div className="dialog__content">
              <h2 className="dialog__title">{title}</h2>
              <p className="dialog__description">{description}</p>
            </div>
            <hr />
            <div className="dialog__footer">
              <button onClick={cancel} className="dialog__cancel">
                Cancel
              </button>
              <button type="submit" className="dialog__confirm">
                Yes, confirm it
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
