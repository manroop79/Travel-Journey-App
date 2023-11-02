import './App.css';
import Navbar from "./navbar";
import Journal from "./journal"
import myData from './data';

function App() {

  const travel = myData.map(item => {
    return (
      <Journal
      title = {item.title}
      location = {item.location}
      maps = {item.googleMapsUrl}
      startDate = {item.startDate}
      endDate = {item.endDate}
      description = {item.description}
      img = {item.imageUrl}
      />
    )
  })

  return (
   <div>
    <Navbar />
    <section>
      {travel}
    </section>
   </div>
  );
}

export default App;