import { Line } from "./Line";
import { Header } from "../../components/HeaderName";

const LineChart = () => {
  return (
    <>
      <Header title="LineChart" text={"Simple Line Chart"} />
      <Line />
    </>
  );
};

export { LineChart };
