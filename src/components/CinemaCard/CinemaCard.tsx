
import TIFFLightBox from "@assets/Image_Cinemas/tiff_lightbox.jpg";
import "./CinemaCard.scss"

export default function CinemaCard (){
    return(
        <div className="cinema">
            <div className="cinema__image-box">
                <img className="cinema__image" src={TIFFLightBox} alt="tiff lightbox cinema photo" />
            </div>
    
            <ul className="cinema__info">
                <div className="cinema__details">
                    <li className="cinema__name">TIFF Lightbox</li>
                    <li className="cinema__website">tiff.net</li>
                </div>
                <li className="cinema__address">350 King St W, Toronto, ON M5V 3X5</li>
                <li className="cinema__about">This centre of the Toronto International Film Festival features world cinema & events year-round.</li>
            </ul>

        </div>      
    )
}