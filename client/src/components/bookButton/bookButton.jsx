import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../../hooks/useAuth';
import styles from '../../styles/button.module.css';

const BookButton = ({ url, handleFileDownload, buttonStyle, bookName }) => {
  const { user } = useAuth();

  const templateParams = {
    userEmail: user.email,
    book_Name: bookName,
    nameOfUser: user.name,
  };

  const handleSendEmail = () => {
    const loadingToast = toast.loading('Sending request...');
    emailjs.send('service_i9agksz', 'template_9fdy2ri', templateParams, 'Pb4Cvh9a0TJj2WnLc').then(
      (response) => {
        console.log('Success!', response.status, response.text);
        toast.dismiss(loadingToast);
        toast.success('Your request has been sent!');
      },
      (error) => {
        console.log('Failed...', error);
      }
    );
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Popup trigger={<button style={buttonStyle}>Get</button>} modal nested className={styles.popup}>
        {(close) => (
          <div className={styles.modal}>
            <div className={styles.content} style={{ textAlign: `justify` }}>
              Thank you for your request to borrow {bookName}. Before we proceed, we would like to confirm if you are
              sure about your request? If everything looks good, click 'Send'. Your request will be processed. If not,
              you can 'Close' this dialog.
            </div>
            <div>
              <button
                type="submit"
                onClick={() => handleSendEmail()}
                style={{
                  display: `flex`,
                  cursor: `pointer`,
                  padding: `20%`,
                  backgroundColor: `#00d341`,
                  color: `white`,
                  borderRadius: `10px`,
                  border: `none`,
                  height: `30px`,
                  marginBottom: `15%`,
                  fontSize: `15px`,
                  textAlign: `center`,
                  justifyContent: `center`,
                }}
              >
                Send
              </button>
              <button
                type="close"
                onClick={() => close()}
                style={{
                  display: `flex`,
                  cursor: `pointer`,
                  padding: `20%`,
                  backgroundColor: `#ff474c`,
                  color: `white`,
                  borderRadius: `10px`,
                  border: `none`,
                  height: `30px`,
                  fontSize: `15px`,
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
