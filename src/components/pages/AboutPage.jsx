import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>About this Project</h1>
      <p>This is a React App to Leave Feedback for this App</p>
      <Link to="/">back to home</Link>
    </Card>
  );
}

export default AboutPage;
