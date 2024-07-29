import "./CinemaList.scss"
import CinemaData from "@/data/cinema.json"
import CinemaListCard from "../CinemaListCard/CinemaListCard"

const CinemaList: React.FC = () => {
   console.log(CinemaData)

    return (
    <>
      <section className="side">
        <div className="side__subtitle">More Cinemas</div>
        <div  className="side__cinemas">
        {CinemaData.map((cinema)=>(
          <CinemaListCard 
            key ={cinema.id}
            name = {cinema.name}
            website = {cinema.website}
            address = {cinema.address}
            description = {cinema.description}
          />
        ))}
        </div>
      </section>
    </>
    )
}

export default CinemaList;
