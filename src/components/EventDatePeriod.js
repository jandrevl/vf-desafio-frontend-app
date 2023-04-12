const EventDatePeriod = (props) => {

    const startDatePT = props.startDatePT;
    const endDatePT = props.endDatePT;

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

export default EventDatePeriod;