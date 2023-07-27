import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';


function Homepage () {
  const featuredEvents = getFeaturedEvents()
  console.dir(featuredEvents)

  return (
    <div>
      {<EventList items={featuredEvents} />}
    </div>
  )
}

export default Homepage