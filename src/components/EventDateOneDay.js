

const EventDateOneDay = (props) => {

    const startDatePT = props.startDatePT;

    return (
        <div className="event-date-container">
            <h1>{startDatePT.dia}</h1>
            <p> {startDatePT.diaSemana} </p>
            <p> {startDatePT.mes} {startDatePT.ano} </p>
        </div>
    );
}

export default EventDateOneDay;