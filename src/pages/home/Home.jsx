import Chart from "../../components/charts/Chart.jsx";
import FeaturedInfo from "../../components/featureInfo/FeaturedInfo.jsx";
import "./home.css";
import { userData } from "../../dummyData.js";
import WidgetLg from "../../components/widgetLg/WidgetLg.jsx";
import WidgetSm from "../../components/widgetSm/WidgetSm.jsx";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" dataKey="Active User" grid="5 5" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
