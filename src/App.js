import "./App.css";
import { ToDoApp } from "./pages/ToDo";
import { Container, WrapperContainer } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <WrapperContainer className="primary-bg">
      <Router basename="/">
        <Navbar />
        <Container>
          <Sidebar />
          <Routes>
            <Route path="/" element={<ToDoApp />} />
            <Route
              path="/coming-soon"
              element={
                <Container
                  styleProps={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h3 className=" p-lg secondary-font">
                    Coming Soon.....{" "}
                    <Link to="/">
                      <span className="primary-font ph-lg code-dev">
                        {"< / >"}{" "}
                      </span>
                    </Link>
                  </h3>
                </Container>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
      </Router>
    </WrapperContainer>
  );
}

export default App;
