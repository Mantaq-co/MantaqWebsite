import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Tabs: {
      variants: {
        custom: {
          tab: {
            fontWeight: "bold",
            _selected: {
              color: "#E67E22", // Orange text color when selected
              borderBottom: "2px solid #E67E22", // Bottom line for selected tab
            },
            _hover: {
              color: "#D35400", // A darker shade for hover effect
            },
          },
          tablist: {},
        },
      },
    },
  },
});

export default theme;
