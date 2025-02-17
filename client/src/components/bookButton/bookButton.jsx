import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const BookButton = ({ url, handleFileDownload, buttonStyle, bookName }) => {
  return (
    <>
      <Popup trigger={<button style={buttonStyle}>Get</button>} modal nested>
        {(close) => (
          <div
            className="modal"
            style={{
              display: 'flex',
              padding: `10%`,
              borderRadius: `10px`,
              justifyContent: `space-between`,
              backgroundColor: `#1a5c85`,
              color: `white`,
              alignItems: `center`,
              gap: `3%`,
            }}
          >
            <div className="content">
              Your request for {bookName} is accepted. You will receive {bookName} through an email shortly.
            </div>
            <div>
              <button
                onClick={() => close()}
                style={{
                  cursor: `pointer`,
                  padding: `10%`,
                  backgroundColor: `#ff474c`,
                  color: `white`,
                  borderRadius: `10px`,
                  border: `none`,
                  width: `200%`,
                  height: `30px`,
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};

export default BookButton;
