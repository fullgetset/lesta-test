import { stepListData } from "../data/stepListData";
import StepList from "./StepList";

const Footer = () => {
  return (
    <footer className="footer">
      <StepList items={stepListData} />

      <p className="footer__text">
        © 2009-2023 Lesta Games. All rights reserved. 12+
      </p>
    </footer>
  );
};

export default Footer;
