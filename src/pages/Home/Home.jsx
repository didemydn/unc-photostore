import React from "react";
import "./Home.css";

function Home(){
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
            src:"/home-photos/antone-adi.jpg",
            alt:"antone-adi",
            info:"Photo by Antone Adi, taken on 2023-09-11 in Amsterdam",            
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
            src: "/home-photos/liam-gant.jpg",
            alt: "liam-gant",
            info: "Photo by Liam Gant, taken on 2024-09-15 in Amsterdam"
        }

    ]
    return(
            <div className="container home">
                <h1>Welcome to PhoSto Photo Gallery</h1>
                <p>This is a photo gallery app showcasing various photos taken by different photographers in Amsterdam. You can buy a single photo as you like and downloaded as much as you like!</p>              
                <div className="row">
                    {photos.map((photo, index) => (
                        <div className="col" key={index}>
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
            </div>
                        
    )
}

export default Home;