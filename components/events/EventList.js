import EventItem from "./EventItem";
import '/styles/event-list.module.css'

function EventList(props) {
    const { items } = props;

    return <ul>
        {items.map(event => 
        <EventItem 
            key={event.id}
            id={event.id} 
            title={event.title} 
            image={event.image}
            date={event.date} 
            location={event.location}
        />)}
    </ul>
}

export default EventList