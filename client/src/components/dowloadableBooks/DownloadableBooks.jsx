import React from 'react';
import BookButton from '../bookButton/bookButton';
import styles from '../../styles/button.module.css';

const DownloadableBooks = () => {
  const ComputerFileURL = '/Computer_Journal.pdf';
  const MathsFileURL = '/Graduation_Maths.pdf';
  const ProgrammingFileURL = '/Computer_Programming.pdf';
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
      <span>We have three dedicated books for our users to have them downloaded in PDF</span>
      <div className={styles.mainDiv}>
        <div className={styles.cardButtonDiv} style={{ backgroundColor: `#006100` }}>
          <img src="/assets/ComputerX.jpg" alt="Computer book" style={bookImageStyle} />
          <span>Computer Journal</span>
          <button
            onClick={() => handlePDFDownload(ComputerFileURL)}
            style={{
              padding: `3%`,
              borderRadius: `10px`,
              border: `none`,
              backgroundColor: `#15A5DF`,
              color: `white`,
              cursor: `pointer`,
            }}
          >
            Download Book
          </button>
        </div>
        <div className={styles.cardButtonDiv} style={{ backgroundColor: `#006100` }}>
          <img src="/assets/MathsX.jpg" alt="Computer book" style={{ ...bookImageStyle, width: `80%` }} />
          <span>Graduation Maths Journal</span>
          <button
            onClick={() => handlePDFDownload(MathsFileURL)}
            style={{
              padding: `3%`,
              borderRadius: `10px`,
              border: `none`,
              backgroundColor: `#15A5DF`,
              color: `white`,
              cursor: `pointer`,
            }}
          >
            Download Book
          </button>
        </div>
        <div className={styles.cardButtonDiv} style={{ backgroundColor: `#006100` }}>
          <img src="/assets/ProgramingX.jpg" alt="Computer book" style={{ ...bookImageStyle, width: `85%` }} />
          <span>Computer Programming Journal</span>
          <button
            style={{
              padding: `3%`,
              borderRadius: `10px`,
              border: `none`,
              backgroundColor: `#15A5DF`,
              color: `white`,
              cursor: `pointer`,
            }}
            onClick={() => handlePDFDownload(ProgrammingFileURL)}
          >
            Download Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadableBooks;
