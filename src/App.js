
import './App.css';
import Homepage from "./Components/Home"
import Aboutus from "./Components/Aboutus"
import {Container} from "react-bootstrap"
function App() {

  return (
    <Container fluid> {/*Fragment start */}
      <Homepage />

      {/*<Aboutus />*/}
    </Container>
  );
}

export default App;
