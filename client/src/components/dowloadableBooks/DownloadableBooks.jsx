import React from 'react';
import axios from 'axios';
import styles from '../../styles/button.module.css';
import { apiUrl, methods, routes } from '../../constants';

const DownloadableBooks = () => {
  const books = [
    {
      title: 'Computer Networks by Tanenbaum',
      url: 'https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Computer%20Networks.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51j8yZQ+zUL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Computer Networking: A Top-Down Approach',
      url: 'https://www.ucg.ac.me/skladiste/blog_44233/objava_64433/fajlovi/Computer%20Networking%20_%20A%20Top%20Down%20Approach%2C%207th%2C%20converted.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41H+0R1E6FL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Networking Fundamentals by Crystal Panek',
      url: 'https://www.haio.ir/app/uploads/2022/02/Networking-Fundamentals-by-Crystal-Panek-z-lib.org_.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41b6v9nZ1-L._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Networking For Dummies by Doug Lowe',
      url: 'https://students.aiu.edu/submissions/profiles/resources/onlineBook/K2H8y3_Networking_For_Dummies-_11_edition.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51XxYzK0XRL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Head First Networking by Al Anderson and Ryan Benedetti',
      url: 'https://elab.hpa.edu/isr/pdf/head-first-networking-9780596521554.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Computer Networks: A Systems Approach by Larry L. Peterson and Bruce S. Davie',
      url: 'https://dl.ebooksworld.ir/motoman/MK.Computer.Networks.Fifth.Edition.A.Systems.Approach.www.EBooksWorld.ir.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'An Introduction to Computer Networks by Peter L. Dordal',
      url: 'https://open.umn.edu/opentextbooks/textbooks/353',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Networking All-in-One Desk Reference For Dummies, 2nd Edition',
      url: 'https://theswissbay.ch/pdf/Gentoomen%20Library/Networking/Networking%20All-in-One%20Desk%20Reference%20for%20Dummies%202nd%20Edition.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Sams Teach Yourself Networking in 24 Hours',
      url: 'https://nibmehub.com/opac-service/pdf/read/tech_networking.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: "Networking: A Beginner's Guide by Bruce Hallberg",
      url: 'https://vintageapple.org/macbooks/pdf/Networking_A_Beginners_Guide_2000.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'The Elements of Networking Style by Michael A. Padlipsky',
      url: 'https://www.ietf.org/rfc/padlipsky-elements.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Lecture Notes on Network Information Theory by Abbas El Gamal and Young-Han Kim',
      url: 'https://arxiv.org/pdf/1001.3404',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Networking - A Statistical Physics Perspective by Chi Ho Yeung and David Saad',
      url: 'https://arxiv.org/pdf/1110.2931',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Software-Defined Networking: A Comprehensive Survey by Diego Kreutz et al.',
      url: 'https://arxiv.org/pdf/1406.0440',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51P5K+0QhML._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Computer Networks by Andrew S. Tanenbaum',
      url: 'https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Computer%20Networks.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41NwnZ1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Networking Fundamentals by Crystal Panek',
      url: 'https://www.haio.ir/app/uploads/2022/02/Networking-Fundamentals-by-Crystal-Panek-z-lib.org_.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41Z1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Computer Networking: A Top-Down Approach (7th Edition)',
      url: 'https://www.ucg.ac.me/skladiste/blog_44233/objava_64433/fajlovi/Computer%20Networking%20_%20A%20Top%20Down%20Approach%2C%207th%2C%20converted.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41NwnZ1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Networking For Dummies (11th Edition)',
      url: 'https://students.aiu.edu/submissions/profiles/resources/onlineBook/K2H8y3_Networking_For_Dummies-_11_edition.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41Z1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Head First Networking',
      url: 'https://elab.hpa.edu/isr/pdf/head-first-networking-9780596521554.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41NwnZ1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Networking Fundamentals - Cisco',
      url: 'https://www.cisco.com/c/dam/global/fi_fi/assets/docs/SMB_University_120307_Networking_Fundamentals.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41Z1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: "Beej's Guide to Network Programming",
      url: 'https://beej.us/guide/bgnet/pdf/bgnet_A4.pdf',
      image: 'https://beej.us/guide/bgnet/cover.jpg',
    },
    {
      title: 'Python for Network Engineers',
      url: 'https://freecomputerbooks.com/Python-for-Network-Engineers.html',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41NwnZ1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Network Programming with Go',
      url: 'https://jan.newmarch.name/golang/net/chapter1.pdf',
      image: 'https://jan.newmarch.name/golang/net/cover.jpg',
    },
    {
      title: 'TCP/IP Illustrated, Volume 1: The Protocols',
      url: 'https://freecomputerbooks.com/TCP-IP-Illustrated-Volume-1-The-Protocols.html',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41Z1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Computer Networking: Principles, Protocols and Practice',
      url: 'https://inl.info.ucl.ac.be/CNP3/CNP3.pdf',
      image: 'https://inl.info.ucl.ac.be/CNP3/cover.jpg',
    },
    {
      title: 'Computer Networks: A Systems Approach',
      url: 'https://dl.ebooksworld.ir/motoman/MK.Computer.Networks.Fifth.Edition.A.Systems.Approach.www.EBooksWorld.ir.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41NwnZ1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'The TCP/IP Guide',
      url: 'http://www.tcpipguide.com/free/t_toc.htm',
      image: 'http://www.tcpipguide.com/images/tcpipguide.jpg',
    },
    {
      title: 'Data Communications and Networking',
      url: 'https://www.tutorialspoint.com/data_communication_computer_network/data_communication_computer_network_tutorial.pdf',
      image:
        'https://www.tutorialspoint.com/data_communication_computer_network/images/data_communication_computer_network.jpg',
    },
    {
      title: 'Cisco Networking Essentials',
      url: 'https://ptgmedia.pearsoncmg.com/images/9780789749031/samplepages/078974903X.pdf',
      image: 'https://images-na.ssl-images-amazon.com/images/I/41Z1N5EL._SX379_BO1,204,203,200_.jpg',
    },
    {
      title: 'Fundamentals of Computer Networks',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter1.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Introduction to Networking',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter2.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Network Security Essentials',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter3.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Wireless Networking',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter4.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Advanced Networking Concepts',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter5.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Network Protocols and Standards',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter6.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Internetworking with TCP/IP Volume One',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter7.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Internetworking with TCP/IP Volume Two',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter8.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Internetworking with TCP/IP Volume Three',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter9.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Network Management: Principles and Practice',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter10.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Introduction to Computer Networks',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter11.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Computer Networks and Internets',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter12.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Computer Networking: A Top-Down Approach',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter13.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Data Communication and Networking',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter14.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Computer Networks: Principles, Technologies and Protocols',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter15.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Network Security: Private Communication in a Public World',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter16.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'High-Speed Networks and Internets: Performance and Quality of Service',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter17.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Computer Networking: A Top-Down Approach Featuring the Internet',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter18.pdf',
      image: 'https://www.cs.virginia.edu/~cs458/images/cover.jpg',
    },
    {
      title: 'Computer Networks: A Systems Approach',
      url: 'https://www.cs.virginia.edu/~cs458/slides/Chapter19.pdf',
      image: '',
    }, //  Add more books as needed
  ];

  const bookImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKXnhKuH1v7K7NmFu6RsXevIMVTHNtp7oaQ&s';

  const handleDownload = async () => {
    try {
      await axios.post(apiUrl(routes.TOTAL_DOWNLOADS, methods.TOTAL_DOWNLOADS));
    } catch (error) {
      console.error('Failed to log download:', error);
    }
  };

  const handlePDFDownload = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('target', '_blank');
    a.setAttribute('download', '');
    document.body.appendChild(a);
    a.click();
    a.remove();
    handleDownload();
  };

  return (
    <div>
      <h2 style={{ marginTop: '10px', textAlign: 'center' }}>Download Free Networking and Computer Books</h2>
      <div
        className={styles.mainDiv}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            className={styles.cardButtonDiv}
            style={{
              backgroundColor: '#006100',
              padding: '10px',
              width: '260px',
              borderRadius: '12px',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <img
              src={bookImage}
              alt={book.title}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '10px',
                backgroundColor: 'white',
              }}
              onError={(e) => {
                e.target.src =
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/640px-HD_transparent_picture.png';
              }}
            />
            <h4 style={{ margin: '10px 0' }}>{book.title}</h4>
            <button
              onClick={() => handlePDFDownload(book.url)}
              style={{
                padding: '10px 15px',
                borderRadius: '8px',
                backgroundColor: '#15A5DF',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadableBooks;
