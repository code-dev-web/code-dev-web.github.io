import "./App.css";
import { ToDoApp } from "./pages/ToDo";
import { Container, WrapperContainer } from "./components/Container";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PageNotFound } from "./pages/PageNotFound";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <WrapperContainer className="primary-bg">
      <Router basename="/">
        <Navbar />
        <Container>
          <Sidebar />
          <Container className="page-display" styleProps={{ width: "100%" }}>
            <Routes>
              <Route path="/" element={<ToDoApp />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
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
        </Container>
      </Router>
    </WrapperContainer>
  );
}

export default App;
