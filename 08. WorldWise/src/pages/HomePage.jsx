import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function HomePage() {
  return (
    <div>
      <PageNav />
      <h1>HomePage</h1>
      <Link to={"/app"}>App</Link>
    </div>
  );
}

export default HomePage;
