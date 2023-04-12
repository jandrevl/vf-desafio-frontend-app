import './EventCard.css';
import EventDateOneDay from './EventDateOneDay';
import EventDatePeriod from './EventDatePeriod';
import { ReactComponent as LocationPin } from '../resources/location-pin-solid.svg';



const EventCard = () => {

    let startDatePT = { diaSemana: "", dia: "", mes: "", ano: "" };
    let endDatePT = { dia: "", mes: "", ano: "" };

    const eventData = { startDate: "01/23/2023", endDate: "04/03/2023", category: "Categoria", eventDescription: "Concurso de Poesia Versos Entrelaçados", eventPlace: "localização", eventTime: "10h30" };

    const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    const days = ["DOMINGO", "SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO"];

    const startDate = new Date(eventData.startDate);
    startDatePT = { diaSemana: days[startDate.getDay()], dia: startDate.getDate(), mes: months[startDate.getMonth()], ano: startDate.getFullYear() };

    if (eventData.endDate != null) {
        const endDate = new Date(eventData.endDate);
        endDatePT = { dia: endDate.getDate(), mes: months[endDate.getMonth()], ano: endDate.getFullYear() };
    }

    const typeOfEvent = eventData.endDate === null ? (<EventDateOneDay startDatePT = { startDatePT }/>) : (<EventDatePeriod startDatePT = { startDatePT } endDatePT = { endDatePT } />);

    return (
        <div className="event-card">

            {typeOfEvent}
            
            <div className="event-description">
                Descrição do evento
                <LocationPin fill='red' />
            </div>

        </div>
    );
}

export default EventCard;







