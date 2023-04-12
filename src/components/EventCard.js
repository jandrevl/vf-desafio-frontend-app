import './EventCard.css';
import EventDateOneDay from './EventDateOneDay';
import EventDatePeriod from './EventDatePeriod';
import { ReactComponent as LocationPin } from '../resources/location-pin-svgrepo-com.svg';
import { ReactComponent as Clock } from '../resources/clock-regular.svg';



const EventCard = () => {

    let startDatePT = { diaSemana: "", dia: "", mes: "", ano: "" };
    let endDatePT = { dia: "", mes: "", ano: "" };

    const eventData = { startDate: "01/23/2023", endDate: "04/03/2023", category: "CATEGORIA", description: "Concurso de poesia palavras soltas em olhao ", location: "Localização", eventTime: "10h30" };

    const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    const days = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];

    const startDate = new Date(eventData.startDate);
    startDatePT = { diaSemana: days[startDate.getDay()], dia: startDate.getDate(), mes: months[startDate.getMonth()], ano: startDate.getFullYear() };

    if (eventData.endDate != null) {
        const endDate = new Date(eventData.endDate);
        endDatePT = { dia: endDate.getDate(), mes: months[endDate.getMonth()], ano: endDate.getFullYear() };
    }

    const typeOfEvent = eventData.endDate === null ? (<EventDateOneDay startDatePT={startDatePT} />) : (<EventDatePeriod startDatePT={startDatePT} endDatePT={endDatePT} />);

    return (
        <div className="event-card">

            {typeOfEvent}

            <div className="event-description">
                <div>
                    <p className='category'> {eventData.category} </p>
                </div>
                <div>
                    <a href='/'> {eventData.description} </a>
                </div>
                <div>
                    <p className='location-time-p' style={{marginBottom: "0"}}> <LocationPin className='location-pin' /> {eventData.location} </p>
                    <p className='location-time-p' style={{marginTop: "0"}}> <Clock className='clock' /> {eventData.eventTime} </p>
                </div>
            </div>

        </div>
    );
}

export default EventCard;







