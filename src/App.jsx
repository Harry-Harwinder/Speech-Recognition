import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpeechRecognization from "./Components/SpeechRecognization";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SpeechRecognization />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
