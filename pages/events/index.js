import { getFeaturedEvents } from '/dummy-data.js'
import EventList from '../../components/events/EventList'
import { getAllEvents } from '../../dummy-data'
import Layout from '../../components/events/Layout'

function Events() {
    const featuredEvents = getFeaturedEvents()
    const allEvents = getAllEvents()
    console.dir(featuredEvents)
    console.dir(allEvents)

    return (
        <div>
            <h1>All Events</h1>

            <ul> {<EventList items={allEvents} />}</ul>

        </div>
    )
}

export default Events