import "./App.css";
import { ToDoApp } from "./pages/ToDo";
import { WrapperContainer } from "./components/Container";

function App() {
  return (
    <WrapperContainer className="primary-bg">
      <ToDoApp />
    </WrapperContainer>
  );
}

export default App;
