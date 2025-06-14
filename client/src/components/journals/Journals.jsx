import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import BookButton from '../bookButton/bookButton';
import styles from '../../styles/button.module.css';

const Journals = () => {
  const ComputerFileURL = 'http://localhost:3000/Computer_Journal.pdf';
  const MathsFileURL = 'http://localhost:3000/Graduation_Maths.pdf';
  const ProgrammingFileURL = 'http://localhost:3000/Computer_Programming.pdf';
  const { user } = useAuth();
  const handlePDFDownload = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  const bookButtonStyle = {
    padding: `2%`,
    width: `96%`,
    border: `none`,
    borderRadius: `10px`,
    cursor: `pointer`,
    color: `white`,
    fontSize: `20px`,
    backgroundColor: `#ff474c`,
  };
  const bookImageStyle = {
    width: `95%`,
    border: `none`,
    borderRadius: `10px`,
  };
  return (
    <div>
      <span style={{ marginTop: `-40px`, display: `block`, marginBottom: `40px` }}>
        {user?.isAdmin
          ? 'Here are the list of Journals available to our Users'
          : 'We have three dedicated books for our users to have them requested and studied'}
      </span>
      <div className={styles.mainDiv}>
        <div className={styles.cardButtonDiv}>
          <img src="/assets/ComputerImage.png" alt="Computer book" style={bookImageStyle} />
          <span>Computer Journal</span>
          {user?.isAdmin ? null : (
            <BookButton
              url={ComputerFileURL}
              handleFileDownload={handlePDFDownload}
              buttonStyle={bookButtonStyle}
              bookName={'Computer Journal'}
            />
          )}
        </div>
        <div className={styles.cardButtonDiv}>
          <img src="/assets/MathsImage.webp" alt="Computer book" style={bookImageStyle} />
          <span>Graduation Maths Journal</span>
          {user?.isAdmin ? null : (
            <BookButton
              url={MathsFileURL}
              handleFileDownload={handlePDFDownload}
              buttonStyle={bookButtonStyle}
              bookName={'Graduation Maths Journal'}
            />
          )}
        </div>
        <div className={styles.cardButtonDiv}>
          <img src="/assets/Programming.jpg" alt="Computer book" style={bookImageStyle} />
          <span>Computer Programming Journal</span>
          {user?.isAdmin ? null : (
            <BookButton
              url={ProgrammingFileURL}
              handleFileDownload={handlePDFDownload}
              buttonStyle={bookButtonStyle}
              bookName={'Computer Programming Journal'}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Journals;
