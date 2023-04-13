import './EventsComponent.css';
import EventCard from './EventCard';
import { ReactComponent as Calendar } from '../resources/calendar-regular.svg';
import { ReactComponent as Clock } from '../resources/clock-regular.svg';


const EventsComponent = () => {

    const events = [
        { startDate: "05/01/2023", endDate: null, category: "CATEGORIA", description: "Descrição de um evento importantíssimo a decorrer no próximo dia um de Maio", location: "Local do Evento", eventTime: "10h30" },
        { startDate: "06/01/2023", endDate: "06/15/2023", category: "CATEGORIA", description: "Campo de Férias Os Petizes", location: "Localização", eventTime: "10h30" },
        { startDate: "07/15/2023", endDate: "07/21/2023", category: "CATEGORIA", description: "Festas Tradicionais da Nossa Senhora da Cerveja Fresca", location: "Localização", eventTime: "10h30" },
        { startDate: "09/22/2023", endDate: null, category: "CATEGORIA", description: "Festival de Stand Up Comedy Prata da Casa", location: "Localização", eventTime: "10h30" }
    ]

    const weekEvents = [
        { description: "Aula de Dança", weekDay: "Quinta-Feira", time: "19h30" },
        { description: "Mercado de Velharias", weekDay: "Sábado", time: "08h00" },
        { description: "Concerto de Piano", weekDay: "Sábado", time: "21h00" },
        { description: "Caminhada Pela Natureza", weekDay: "Domingp", time: "09h00" },
        { description: "Aula de Capoeira", weekDay: "Segunda-Feira", time: "19h30" },
        { description: "Workshop de Culinária", weekDay: "Terça-Feira", time: "20h30" }
    ]

    return (
        <div className="events-component">

            <div className="general-events-header">
                <p className='component-title-font'>EVENTOS</p>
                <a href="/"> VER TODOS</a>
            </div>
            <div className="component-title-underline"></div>


            <div className="events-activities">

                <div className="events-collection">
                    {events.map((generalEvent) => (
                        <EventCard generalEvent = { generalEvent }/>
                    ))}
                </div>

                <div className="activities-webbrowser">
                    
                    <div className="activities-title">
                        <p>Atividades da Semana</p>
                    </div>
                    <div className="activities-list">

                        { weekEvents.map((weekEvent) => (
                        <div className="activity-item">
                            <div style={{fontSize: "16", color: "#3e3e40"}}> { weekEvent.description} </div>
                            <div className='day-time'>
                            <div className='activity-schedule'> <Calendar className='calendar-icon' /> { weekEvent.weekDay } </div>
                            <div className='activity-schedule'> <Clock className='clock-icon' /> { weekEvent.time } </div>
                            </div>
                            <hr style={{backgroundColor: "#EEEEEE"}}/>
                        </div>
                        ))}

                    </div>
                </div>
            </div>
            
            <div className='mobile-link'>
                <br />
                <p><a href="/">VER TODOS</a></p>
                <br /><br />
            </div>
            
            <div className="activities-mobile">
               
                    <div className="activities-title">
                        <p>Atividades da Semana</p>
                    </div>
                    <div className="activities-list">

                        { weekEvents.map((weekEvent) => (
                        <div className="activity-item">
                            <div style={{fontSize: "16", color: "#3e3e40"}}> { weekEvent.description} </div>
                            <div className='day-time'>
                            <div className='activity-schedule'> <Calendar className='calendar-icon' /> { weekEvent.weekDay } </div>
                            <div className='activity-schedule'> <Clock className='clock-icon' /> { weekEvent.time } </div>
                            </div>
                            <hr style={{backgroundColor: "#EEEEEE"}}/>
                        </div>
                        ))}

                    </div>
                </div>



        </div>
    );
}

export default EventsComponent;