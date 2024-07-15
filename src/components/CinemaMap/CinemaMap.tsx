import "./CinemaMap.scss"
import TIFFLightBox from "@assets/Image_Cinemas/tiff_lightbox.jpg";

export default function CinemaMap (){
    return (
        <>
          <section className="cinema">
            <h2 className="cinema__title">Art House Cinemas Locator</h2>
            <div className="cinema__description">
                <div className="cinema__map">
                    <img className="cinema__image" src={TIFFLightBox} alt="tiff lightbox cinema photo" />
                </div>
                <div className="cinema__info-box">
                    <ul className="cinema__info">
                        <li className="cinema__name">TIFF Lightbox</li>
                        <li className="cinema__address">350 King St W, Toronto, ON M5V 3X5</li>
                        <li className="cinema__theatres">5</li>
                        <li className="cinema__website">tiff.net</li>
                        <li className="cinema__contact">(416)5992033</li>
                        <li className="cinema__accessibility">Wheelchair accessible(seating, entrance, parking lot, washroom</li>
                    </ul>
                    <p className="cinema__about">This centre of the Toronto International Film Festival features world cinema & events year-round.</p>
                </div>
            </div>
          </section>
        </>
    )
}