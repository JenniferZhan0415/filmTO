import './FestivalCalender.scss'

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
                    <button className='Calender__month'>March</button>
                    <button className='Calender__month'>April</button>
                    <button className='Calender__month'>May</button>
                    <button className='Calender__month'>June</button>
                 </div>
                 <div  className='Calender__box'>
                    <button className='Calender__month'>July</button>
                    <button className='Calender__month Calender__month--active'>Aug</button>
                    <button className='Calender__month'>Sep</button>
                    <button className='Calender__month'>Oct</button>
                    <button className='Calender__month'>Nov</button>
                    <button className='Calender__month'>Dec</button>
                 </div>
            </div>
        </section>
       
        </>
    )
}