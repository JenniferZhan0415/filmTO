import './FestivalCalender.scss'
import FestivalList from '../FestivalList/FestivalList'

export default function FestivalCalender(){
    return(
        <>
        <section className='festivals'> 
            <h2 className='festivals__title'>
                Ongoing Film Festivals
            </h2>
            <div className='Calender'> 
                <div className='Calender__box'>
                    <button className='Calender__month'>Jan</button>
                    <button className='Calender__month'>Feb</button>
                    <button className='Calender__month'>Mar</button>
                    <button className='Calender__month'>Apr</button>
                    <button className='Calender__month'>May</button>
                    <button className='Calender__month'>Jun</button>
                 </div>
                 <div  className='Calender__box'>
                    <button className='Calender__month'>Jul</button>
                    <button className='Calender__month Calender__month--active'>Aug</button>
                    <button className='Calender__month'>Sep</button>
                    <button className='Calender__month'>Oct</button>
                    <button className='Calender__month'>Nov</button>
                    <button className='Calender__month'>Dec</button>
                 </div>
            </div>
            <FestivalList />
        </section>
       
        </>
    )
}