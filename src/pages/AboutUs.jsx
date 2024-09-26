import { NavLink } from "react-router-dom";
import { WrapperContainer } from "../components/Container";

export const AboutUs = () => {
  return (
    <WrapperContainer styleProps={{ width: "95%", textAlign: "justfy" }}>
      <h4 className="primary-font">About Us</h4>
      <h5 className="secondary-font">
        Welcome to{" "}
        <NavLink
          className={`primary-font ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
          to="/"
        >
          code-dev-web.github.io
        </NavLink>
        !
      </h5>
      <h6 className="secondary-font">
        Our mission is to make learning React easy and accessible for everyone.
        Whether you're a complete beginner or someone looking to enhance your
        skills, our step-by-step tutorials are designed to guide you through the
        fundamentals and beyond.
        <h6>
          <b>Who We Are </b>
        </h6>
        We are developers and educators passionate about React and web
        development. We created this platform to help aspiring developers
        navigate the world of React with simple, clear tutorials. Each lesson is
        carefully crafted to ensure learners can build their skills
        progressively.
        <h6>
          <b>What We Offer</b>
        </h6>
        <ul>
          <li>
            Beginner-Friendly React Tutorials: Our tutorials start from the very
            basics of React, covering everything from component-based
            architecture to state management.
          </li>
          <li>
            Hands-On Practice: Every tutorial is designed with practical
            examples, giving you the chance to apply what you've learned
            immediately.
          </li>
        </ul>
        <h6>
          <b>Our Vision</b>
        </h6>
        We help the next generation of developers gain the skills they need to
        succeed in tech. Through our platform, we aim to create a learning
        environment where anyone, regardless of their background, can become
        proficient in React. Thank you for choosing{" "}
        <NavLink
          className={`primary-font ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
          to="/"
        >
          code-dev-web.github.io
        </NavLink>{" "}
        ! <br />
        <i> We’re excited to be a part of your learning journey.</i>
      </h6>
    </WrapperContainer>
  );
};
