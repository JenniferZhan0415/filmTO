// import OutdoorShow from '@assets/Images_Festivals/toronto_outdoor_picture_show.png'
import OutdoorShowNew from '@assets/Images_Festivals/new.jpg'


import './FestivalCard.scss'

export default function FestivalCard (){
    return (
        <>
        <div className="card">
            <div className="card__box">
                <img className="card__image" src={OutdoorShowNew} alt="outdoor film festival photo" />
                <h3  className="card__title">Toronto outdoor picture show</h3>
            </div>
            <div className="card__box">
                <img className="card__image" src={OutdoorShowNew} alt="outdoor film festival photo" />
                <h3  className="card__title">Toronto outdoor picture show</h3>
            </div>
            <div className="card__box">
                <img className="card__image" src={OutdoorShowNew} alt="outdoor film festival photo" />
                <h3  className="card__title">Toronto outdoor picture show</h3>
            </div>
        </div>
        </>
    )
}