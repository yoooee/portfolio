import React, {useState}  from 'react';
import type { portfolioItem } from '../../interfaces';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Modal from '../../UI/Modal/Modal';

function Design() {
  const portfolioItemList: portfolioItem [] = [
    {
      image: 'smb.jpg', 
      title: "Super DNN World", 
      subtitle: "DotNetNuke Design Challenge Community Favorite", 
      bodytext: "I created a custom theme for DotNetNuke around the concept of the Super Mario Brothers games. Every asset in this theme pack was hand drawn and configured to work within DNN. Yes, even the slide show of the complete first level was hand drawn.",
      tags: ['css', 'html']}, 
    {
      image: 'church.jpg',
      title: "Faith",
      subtitle: "Digital manipulation",
      bodytext: "This work combines various photos I took combined and altered in photoshop.",
      tags: ['photography', 'photoshop'],
    }, 
    {
      image: 'golf-classic.jpg',
      title: "St. Paul's Mini Golf Classic",
      subtitle: "Flyer designed for a church miniature golf event.",
      bodytext: "This was a fun project as I got to use my Wacom tablet and draw all of the graphical pieces. The church has large stained glass windows which I used as inspiration for this design.",
      tags: ['wacom', 'photoshop', 'illustrator'],
    }, 
    {
      image: "guinness.jpg",
      title: "Happy Hour",
      subtitle: "Digital manipulation",
      tags: ["photography", "photoshop"],
    }, 
    {
      image: "halloween.jpg",
      title: "Halloween Party Poster",
      bodytext: "We decided to throw a Halloween party at work so I designed this poster as a fun way to spread the news.",
      tags: ["photoshop"]
    }, 
    {
      image: 'machine.jpg',
      title: "Down on the farm",
      subtitle: "Digital manipulation",
      tags: ["photography", "photoshop"]
    }, 
    {
      image: 'mardi-gras.jpg',
      title: "Mardi Gras",
      subtitle: "2010 Mardi Gras Poster Competition.",
      bodytext: "My submission for the 2010 Mardi Gras parade. The theme was famous kings and queens.",
      tags: ["photography", "photoshop", "wacom"],
    }
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  
  function cardClickHandler(currentModal: number) {
    setCurrentModal(currentModal);
    setModalIsOpen(true); 
    window.scrollTo(0, 0);
  }

  return (
    <div className="design-cards">
      <Modal show={modalIsOpen} modalClosed={() => setModalIsOpen(false)}>{portfolioItemList[currentModal]}</Modal>
      <CardList>
        {
          portfolioItemList.map((portfolioItem, key) => {
            return (
              <Card key={key} portfolioItem={portfolioItem} clicked={() => cardClickHandler(key)} />
            )
          })
        }
      </CardList>
    </div>
  );
}

export default Design;
