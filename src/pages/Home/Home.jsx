import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home({loggedIn}){

    const [modal, setModal] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState(null);

    const navigate = useNavigate();

    const photos = [
        {
            src:"/home-photos/andrew-hawkes.jpg",
            alt:"andrew-hawkes",
            info:"Photo by Andrew Hawkes, taken on 2024-09-01 in Amsterdam",            
        },
        {
            src:"/home-photos/antone-adi.jpg",
            alt:"antone-adi",
            info:"Photo by Antone Adi, taken on 2024-04-11 in Amsterdam",            
        },       
        {
            src: "/home-photos/harvey.jpg",
            alt: "harvey",
            info: "Photo by Harvey, taken on 2024-08-20 in Amsterdam"
        },
        {
            src: "/home-photos/jack-winbow.jpg",
            alt: "jack-winbow",
            info: "Photo by Jack Winbow, taken on 2024-07-10 in Amsterdam"
        },
        {
            src: "/home-photos/jeswin.jpg",
            alt: "jeswin",
            info: "Photo by Jeswin, taken on 2024-06-20 in Amsterdam"
        },
        {
            src:"/home-photos/katapal.jpg",
            alt:"katapal",
            info:"Photo by Kata Pal, taken on 2023-02-11 in Amsterdam",            
        },
        {
            src: "/home-photos/liam-gant.jpg",
            alt: "liam-gant",
            info: "Photo by Liam Gant, taken on 2024-09-15 in Amsterdam"
        },
        {
            src: "/home-photos/liene-ratniece.jpg",
            alt: "liene-ratniece",
            info: "Photo by Liene Ratniece, taken on 2024-09-15 in Amsterdam"
        },
        {
            src: "/home-photos/shovyrahman.jpg",
            alt: "shovyrahman",
            info: "Photo by Shovy Rahman, taken on 2024-09-15 in Amsterdam"
        }
    ]

    const openModal = (photo) => {
        setCurrentPhoto(photo);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        setCurrentPhoto(null);
    }

    const handleYesButton = () => {
        if (loggedIn) {
            navigate("/purchase");
        } else {
        navigate("/login");
        }
    };

    return(
            <div className="container home">
                <div className="head">
                <h2><i className="fa fa-camera-retro" aria-hidden="true"></i> Welcome to PhoSto Photo Gallery</h2>
                <p>This is a photo gallery app showcasing various photos taken by different photographers in Amsterdam. You can buy a single photo as you like and downloaded as much as you like!</p>              
                </div>
                <div className="row">
                    {photos.map((photo, index) => (
                        <div className="col" key={index} onClick={() => openModal(photo)}>
                            <div className="photo-container">
                                <img 
                                    src={photo.src} 
                                    alt={photo.alt}
                                />
                                <div className="photo-details">
                                    <p>{photo.info}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {modal && (
                    <div className="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true">
                        <div className="modal-content">                            
                            <div className="modal-photo-container">
                                <img src={currentPhoto.src} alt={currentPhoto.alt}/>
                                <div className="modal-info-overlay">
                                    <div>
                                    <p>{currentPhoto.info}</p>
                                    <p className="question">Hey! Do you want to purchase this photo?</p>
                                    </div>
                                    <div>
                                    <button className="btn-secondary" onClick={handleYesButton}>Yes</button> 
                                    <button onClick={closeModal}>No</button>  
                                    </div>                                 
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
                        
    )
}

export default Home;