import { Header } from "../../components/HeaderName";
import { Pie } from "./pie";

const PieChart = () => {
  return (
    <div style={{ height: "75%" }}>
      <Header title={"Pie Chart"} text="Simple Pie Chart" />
      <Pie />
    </div>
  );
};

export { PieChart };
