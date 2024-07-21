import "./CinemaMap.scss"
import CinemaCard from "@components/CinemaCard/CinemaCard"
import CinemaList from "../CinemaList/CinemaList"

export default function CinemaMap (){
    return (
    <>
          <section className="map">
            <h2 className="map__title">Art House Cinemas Locator</h2>
            <div className="map__section">
              <CinemaCard />
              <CinemaList />
            </div>
          </section>
        </>
    )
}