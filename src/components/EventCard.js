import './EventCard.css';

let startDatePT = { diaSemana: "", dia: "", mes: "", ano: "" };
let endDatePT = { dia: "", mes: "", ano: "" };

const EventCard = () => {

    const eventData = { startDate: "04/23/2023", endDate: null, category: "Categoria", eventDescription: "Concurso de Poesia Versos Entrelaçados", eventPlace: "localização", eventTime: "10h30" };

    const typeOfEvent = eventData.endDate === null ? (<EventDateOneDay />) : (<EventDatePeriod />);

    const months = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
    const days = ["SEGUNDA", "TERÇA", "QUARTA", "QUINTA", "SEXTA", "SÁBADO", "DOMINGO"];

    const startDate = new Date(eventData.startDate);
    startDatePT = { diaSemana: days[startDate.getDay() - 1], dia: startDate.getDate(), mes: months[startDate.getMonth()], ano: startDate.getFullYear() };

    // endDatePT = {dia: "", mes: "", ano: ""};
    if (eventData.endDate != null) {
        const endDate = new Date(eventData.endDate);
        endDatePT = { dia: endDate.getDate(), mes: months[endDate.getMonth()], ano: endDate.getFullYear() };
    }





    return (
        <div className="event-card">

            {typeOfEvent}

            <div className="event-description">
                Descrição do evento
            </div>

        </div>
    );
}

export default EventCard;

const EventDateOneDay = () => {
    return (
        <div className="event-date-container">
            <h1>{startDatePT.dia}</h1>
            <p> {startDatePT.diaSemana} </p>
            <p> {startDatePT.mes} {startDatePT.ano} </p>
        </div>
    );
}

const EventDatePeriod = () => {
    return (
        <div className="event-date-container">
            <div className="reduced-event-date">
                <h3> {startDatePT.dia} </h3>
                <p> {startDatePT.mes} {startDatePT.ano} </p>
            </div>
            <div className="reduced-event-date">
                <h3> {endDatePT.dia} </h3>
                <p> {endDatePT.mes} {endDatePT.ano} </p>
            </div>
        </div>
    );
}



