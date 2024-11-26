import { Cart } from "./cart";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

import { Stack } from "@mui/material";

const Row1 = () => {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Cart
          icon={<EmailIcon />}
          number={"1,365"}
          text={"Emails Sent"}
          increase={"+12%"}
          data={data1}
          scheme={"category10"}
        />
        <Cart
          icon={<PointOfSaleIcon />}
          number={"531,365"}
          text={"Sales Obtained"}
          increase={"+26%"}
          data={data2}
          scheme={"accent"}
        />
        <Cart
          icon={<PersonAddAlt1Icon />}
          number={"15,365"}
          text={"New Clients"}
          increase={"+3%"}
          data={data3}
          scheme={"dark2"}
        />
        <Cart
          icon={<TrafficIcon />}
          number={"1,365,265"}
          text={"Traffic Received"}
          increase={"+43%"}
          data={data4}
          scheme={"nivo"}
        />
      </Stack>
    </>
  );
};

export { Row1 };
