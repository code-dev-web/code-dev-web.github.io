import { Container } from "./Container";

export const Navbar = () => {
  return (
    <Container className="navbar navbar-bg pt-xs ph-xs">
      <img
        alt="logo"
        src={process.env.PUBLIC_URL + "/logo.svg"}
        height="auto"
      />
    </Container>
  );
};
