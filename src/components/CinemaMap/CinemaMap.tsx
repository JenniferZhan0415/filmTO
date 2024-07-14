import "./CinemaMap.scss"

export default function CinemaMap (){
    return (
        <>
          <section className="cinema">
            <h2 className="cinema__title">Art House Cinemas Locator</h2>
            <div className="cinema-map">
                <div className="cinema-card"></div>
                <div className="cinema-card"></div>
                <div className="cinema-card"></div>
                <div className="cinema-card"></div>
                <div className="cinema-card"></div>
            </div>
            <div>
                <ul className="cinema-list">
                    <li className="cinema-title"></li>
                    <li className="cinema-title"></li>
                    <li className="cinema-title"></li>
                    <li className="cinema-title"></li>
                    <li className="cinema-title"></li>
                </ul>
            </div>
          </section>
        </>
    )
}