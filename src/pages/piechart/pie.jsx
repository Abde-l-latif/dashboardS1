/* eslint-disable react/prop-types */
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "@emotion/react";

const data = [
  {
    id: "javascript",
    label: "javascript",
    value: 900,
    color: "hsl(281, 70%, 50%)",
  },
  {
    id: "html",
    label: "html",
    value: 1200,
    color: "hsl(302, 70%, 50%)",
  },
  {
    id: "css",
    label: "css",
    value: 1000,
    color: "hsl(82, 70%, 50%)",
  },
  {
    id: "react",
    label: "react",
    value: 900,
    color: "hsl(313, 70%, 50%)",
  },
  {
    id: "tailwind",
    label: "tailwind",
    value: 700,
    color: "hsl(1, 70%, 50%)",
  },
];
const Pie = ({ isDashboard = false }) => {
  const Theme = useTheme();
  return (
    <div style={{ height: isDashboard ? "50%" : "98%" }}>
      <ResponsivePie
        data={data}
        margin={
          isDashboard
            ? { top: 20, right: 70, bottom: 30, left: 70 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashboard ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        theme={{
          text: {
            fontSize: 15,
          },

          annotations: {
            text: {
              fontSize: 13,
              fill: "#333333",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: "#ffffff",
              color: "#333333",
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={Theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        enableArcLinkLabels={isDashboard ? false : true}
        enableArcLabels={isDashboard ? false : true}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={
          isDashboard
            ? ""
            : [
                {
                  match: {
                    id: "ruby",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "c",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "go",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "python",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "scala",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "lisp",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "elixir",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "javascript",
                  },
                  id: "lines",
                },
              ]
        }
        legends={
          isDashboard
            ? ""
            : [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000",
                      },
                    },
                  ],
                },
              ]
        }
      />
    </div>
  );
};

export { Pie };
