import { Link } from "react-router-dom";
import { Container, WrapperContainer } from "../components/Container";

export const PageNotFound = () => {
  return (
    <Container
      styleProps={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <WrapperContainer className="not-found">
        <h2>404 - Page Not Found</h2>
        <Link to="/" className="primary-font">
          Goto Homepage
        </Link>
      </WrapperContainer>
    </Container>
  );
};
