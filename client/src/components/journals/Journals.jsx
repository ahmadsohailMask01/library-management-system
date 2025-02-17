import React from 'react';
import BookButton from '../bookButton/bookButton';

const Journals = () => {
  const ComputerFileURL = 'http://localhost:3000/Computer_Journal.pdf[';
  const MathsFileURL = 'http://localhost:3000/Graduation_Maths.pdf';
  const ProgrammingFileURL = 'http://localhost:3000/Computer_Programming.pdf';
  const handlePDFDownload = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  const mainDivStyle = {
    marginTop: `1%`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `center`,
    gap: `5%`,
    alignItems: `center`,
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
  const cardButtonDiv = {
    width: `100%`,
    display: `flex`,
    flexDirection: `column`,
    rowGap: `10px`,
    justifyContent: `center`,
    alignItems: `center`,
    border: `1px solid darkgrey`,
    borderRadius: `20px`,
    padding: `1%`,
    backgroundColor: `#1A5C85`,
    color: `white`,
    boxShadow: `0px 0px 10px lightgrey`,
  };
  const bookImageStyle = {
    width: `95%`,
    border: `none`,
    borderRadius: `10px`,
  };
  return (
    <div>
      <span>We have three dedicated books for our users to have them requested and studied</span>
      <div style={mainDivStyle}>
        <div style={cardButtonDiv}>
          <img src="/assets/ComputerImage.png" alt="Computer book" style={bookImageStyle} />
          <span>Computer Journal</span>
          <BookButton
            url={ComputerFileURL}
            handleFileDownload={handlePDFDownload}
            buttonStyle={bookButtonStyle}
            bookName={'Computer Journal'}
          />
        </div>
        <div style={cardButtonDiv}>
          <img src="/assets/MathsImage.webp" alt="Computer book" style={bookImageStyle} />
          <span>Graduation Maths Journal</span>
          <BookButton
            url={MathsFileURL}
            handleFileDownload={handlePDFDownload}
            buttonStyle={bookButtonStyle}
            bookName={'Graduation Maths Journal'}
          />
        </div>
        <div style={cardButtonDiv}>
          <img src="/assets/Programming.jpg" alt="Computer book" style={bookImageStyle} />
          <span>Computer Programming Journal</span>
          <BookButton
            url={ProgrammingFileURL}
            handleFileDownload={handlePDFDownload}
            buttonStyle={bookButtonStyle}
            bookName={'Computer Programming Journal'}
          />
        </div>
      </div>
    </div>
  );
};

export default Journals;
