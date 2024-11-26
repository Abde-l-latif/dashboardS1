import { Header } from "../../components/HeaderName";
import { Bar } from "./bar";

const BarChart = () => {
  return (
    <>
      <Header
        title={"Bar Chart"}
        text="The minimum wage in morocco, France and Spain (EUR/month)} "
      />
      <Bar />
    </>
  );
};

export { BarChart };
