import { extendTheme } from "@chakra-ui/react";

// Chakra-UI theme.
export const themeExtension = {
  components: {
    Text: {
      baseStyle: {
        width: "fit-content",
        textAlign: "left"
      }
    },
    Heading: {
      baseStyle: {
        width: "fit-content",
        textAlign: "left"
      }
    }
  }
  // TODO
};

export const extendedTheme = extendTheme(themeExtension);
