import "./WelcomePage.css";
import { SvgSketchBoxLogo } from "../../components";
import { Link } from "react-router-dom";


export function WelcomePage() {
  return (
    <div className="Welcome">
      <Link to="/new-sketchboard">
        <SvgSketchBoxLogo width={250} height={250}></SvgSketchBoxLogo>
      </Link>
    </div>
  );
}
