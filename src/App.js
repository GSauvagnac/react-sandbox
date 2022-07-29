import "./styles.css";
import Navbar from "./Components/Navbar/Navbar";
import ClientList from "./Components/ClientList/ClientList";
import Slider from "./Components/Slider/Slider";
import Player from "./Components/Player/Player";
import CssSandbox from "./Components/CssSandbox/CssSandbox";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Body">
        <ClientList />
        <Slider />
        <Player />
        <CssSandbox />
      </div>
    </div>
  );
}
