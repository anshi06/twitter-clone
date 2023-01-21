import "./Home.css";
import Sidebar from "./LeftSection/Sidebar";
import Feed from "./Dashboard/Feed";
import Widgets from './Dashboard/Widgets';
function Home() {
  return (
    <div className="home">
      <Sidebar/>
      <Feed />
      <Widgets/>
    </div>
  );
}
export default Home;
