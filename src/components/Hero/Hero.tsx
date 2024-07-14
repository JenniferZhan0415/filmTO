import "./Hero.scss"
import filmTOLogo from "@assets/logo/filmTO_logo.png"

export default function Hero(){
    return(
        <>
        <section  className='hero'>
            <div className="hero__image-box">
                <img className="hero__image" src={filmTOLogo} alt="" />
            </div>
            <div className="hero__content">
                <h1 className='hero__title'>
                "Art House Cinemas & Film Festivals!"
                </h1>
                <p className='hero__text'> 
                🎥 A must-see for Toronto movie enthusiasts! <br/>
                🎬 A film fans club based in Toronto, dedicated to recommending multicultural film festivals and events, with a focus on art-house and independent cinemas.</p>
                <button className='hero__Join-us-button'>Join us</button>
            </div>

        </section>
        </>
    )
}