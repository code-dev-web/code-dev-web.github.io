import { NavLink } from "react-router-dom";
import { WrapperContainer } from "../components/Container";

export const PrivacyPolicy = () => {
  return (
    <WrapperContainer styleProps={{ width: "95%", textAlign: "justify" }}>
      <h4 className="primary-font">Privacy Policy </h4>
      <h5 className="secondary-font">
        Effective Date: <i>September 26, 2024</i>
      </h5>
      <h6 className="secondary-font">
        At{" "}
        <NavLink
          className={`primary-font ${({ isActive }) =>
            isActive ? "active-link" : ""}`}
          to="/"
        >
          code-dev-web.github.io
        </NavLink>
        , we value your privacy and are committed to being transparent about how
        we handle your data. This privacy policy explains that while we do not
        collect personal information, third-party services, such as advertisers,
        may collect certain data for advertising purposes.
        <br />
        <br />
        1. Information We Collect We do not directly collect any personal
        information from visitors to our website. As a static website, no
        registration, login, or submission of personal data is required.
        <br />
        <br />
        2. Display of Ads We display advertisements on our website through
        third-party ad networks, such as Google AdSense or similar services.
        These ad networks may use cookies or other tracking technologies to
        serve relevant ads based on your visits to this site and other websites.
        <br />
        <br />
        3. Cookies and Tracking Technologies While we do not use cookies,
        third-party ad providers may collect the following types of information
        for advertising purposes: IP address Browser type Device information Web
        pages visited before and after coming to our site Demographic data
        (where available) These third-party ad providers may use this
        information to show ads that are more relevant to your interests.
        <br />
        <br />
        4.Third-Party Links Our website may contain links to third-party
        websites, including advertisers. We are not responsible for the privacy
        practices of these external sites. We recommend reviewing the privacy
        policies of any third-party websites you visit.
        <br />
        5. Your Choices Opting out of personalized ads: You can manage your
        cookie preferences or opt out of personalized ads through your browser
        settings or by visiting industry-standard opt-out tools such as the
        Network Advertising Initiative or Google Ad Settings. Disabling cookies:
        You can block or remove cookies through your browser settings, but this
        may affect your experience with personalized ads.
        <br />
        <br />
        6.Data Security Since we do not collect personal data directly, we do
        not store or process any user information. However, third-party ad
        providers may have their own security measures for handling data, which
        you can review through their privacy policies.
        <br />
        <br />
        7. Changes to This Privacy Policy We may update this policy from time to
        time, particularly if we add new services or change our ad practices.
        Please check this page periodically for updates.
      </h6>
    </WrapperContainer>
  );
};
