import './App.css';
import IpFinder from "./components/ip-finder";
import IpGeolocation from "./components/ip-geolocation";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <IpFinder/>
      <IpGeolocation/>
    </div>
  );
}

export default App;
