import { definePreset } from "@pandacss/dev";

export default definePreset({
  name: "@rotate/preset",
  theme: {
    extend: {
      tokens: {
        colors: {
          transparent: { value: "transparent" },
          "whiteAlpha.50": { value: "rgba(255, 255, 255, 0.04)" },
          "whiteAlpha.100": { value: "rgba(255, 255, 255, 0.06)" },
          "whiteAlpha.200": { value: "rgba(255, 255, 255, 0.08)" },
          "whiteAlpha.300": { value: "rgba(255, 255, 255, 0.16)" },
          "whiteAlpha.400": { value: "rgba(255, 255, 255, 0.24)" },
          "whiteAlpha.500": { value: "rgba(255, 255, 255, 0.36)" },
          "whiteAlpha.600": { value: "rgba(255, 255, 255, 0.48)" },
          "whiteAlpha.700": { value: "rgba(255, 255, 255, 0.64)" },
          "whiteAlpha.800": { value: "rgba(255, 255, 255, 0.80)" },
          "whiteAlpha.900": { value: "rgba(255, 255, 255, 0.92)" },

          "blackAlpha.50": { value: "rgba(0, 0, 0, 0.04)" },
          "blackAlpha.100": { value: "rgba(0, 0, 0, 0.06)" },
          "blackAlpha.200": { value: "rgba(0, 0, 0, 0.08)" },
          "blackAlpha.300": { value: "rgba(0, 0, 0, 0.16)" },
          "blackAlpha.400": { value: "rgba(0, 0, 0, 0.24)" },
          "blackAlpha.500": { value: "rgba(0, 0, 0, 0.36)" },
          "blackAlpha.600": { value: "rgba(0, 0, 0, 0.48)" },
          "blackAlpha.700": { value: "rgba(0, 0, 0, 0.64)" },
          "blackAlpha.800": { value: "rgba(0, 0, 0, 0.80)" },
          "blackAlpha.900": { value: "rgba(0, 0, 0, 0.92)" },

          "gray.50": { value: "#F7FAFC" },
          "gray.100": { value: "#EDF2F7" },
          "gray.200": { value: "#E2E8F0" },
          "gray.300": { value: "#CBD5E0" },
          "gray.400": { value: "#A0AEC0" },
          "gray.500": { value: "#718096" },
          "gray.600": { value: "#4A5568" },
          "gray.700": { value: "#2D3748" },
          "gray.800": { value: "#1A202C" },
          "gray.900": { value: "#171923" },

          "red.50": { value: "#FFF5F5" },
          "red.100": { value: "#FED7D7" },
          "red.200": { value: "#FEB2B2" },
          "red.300": { value: "#FC8181" },
          "red.400": { value: "#F56565" },
          "red.500": { value: "#E53E3E" },
          "red.600": { value: "#C53030" },
          "red.700": { value: "#9B2C2C" },
          "red.800": { value: "#822727" },
          "red.900": { value: "#63171B" },

          "orange.50": { value: "#FFFAF0" },
          "orange.100": { value: "#FEEBC8" },
          "orange.200": { value: "#FBD38D" },
          "orange.300": { value: "#F6AD55" },
          "orange.400": { value: "#ED8936" },
          "orange.500": { value: "#DD6B20" },
          "orange.600": { value: "#C05621" },
          "orange.700": { value: "#9C4221" },
          "orange.800": { value: "#7B341E" },
          "orange.900": { value: "#652B19" },

          "yellow.50": { value: "#FFFFF0" },
          "yellow.100": { value: "#FEFCBF" },
          "yellow.200": { value: "#FAF089" },
          "yellow.300": { value: "#F6E05E" },
          "yellow.400": { value: "#ECC94B" },
          "yellow.500": { value: "#D69E2E" },
          "yellow.600": { value: "#B7791F" },
          "yellow.700": { value: "#975A16" },
          "yellow.800": { value: "#744210" },
          "yellow.900": { value: "#5F370E" },

          "green.50": { value: "#F0FFF4" },
          "green.100": { value: "#C6F6D5" },
          "green.200": { value: "#9AE6B4" },
          "green.300": { value: "#68D391" },
          "green.400": { value: "#48BB78" },
          "green.500": { value: "#38A169" },
          "green.600": { value: "#2F855A" },
          "green.700": { value: "#276749" },
          "green.800": { value: "#22543D" },
          "green.900": { value: "#1C4532" },

          "teal.50": { value: "#E6FFFA" },
          "teal.100": { value: "#B2F5EA" },
          "teal.200": { value: "#81E6D9" },
          "teal.300": { value: "#4FD1C5" },
          "teal.400": { value: "#38B2AC" },
          "teal.500": { value: "#319795" },
          "teal.600": { value: "#2C7A7B" },
          "teal.700": { value: "#285E61" },
          "teal.800": { value: "#234E52" },
          "teal.900": { value: "#1D4044" },

          "blue.50": { value: "#ebf8ff" },
          "blue.100": { value: "#bee3f8" },
          "blue.200": { value: "#90cdf4" },
          "blue.300": { value: "#63b3ed" },
          "blue.400": { value: "#4299e1" },
          "blue.500": { value: "#3182ce" },
          "blue.600": { value: "#2b6cb0" },
          "blue.700": { value: "#2c5282" },
          "blue.800": { value: "#2a4365" },
          "blue.900": { value: "#1A365D" },

          "cyan.50": { value: "#EDFDFD" },
          "cyan.100": { value: "#C4F1F9" },
          "cyan.200": { value: "#9DECF9" },
          "cyan.300": { value: "#76E4F7" },
          "cyan.400": { value: "#0BC5EA" },
          "cyan.500": { value: "#00B5D8" },
          "cyan.600": { value: "#00A3C4" },
          "cyan.700": { value: "#0987A0" },
          "cyan.800": { value: "#086F83" },
          "cyan.900": { value: "#065666" },

          "purple.50": { value: "#FAF5FF" },
          "purple.100": { value: "#E9D8FD" },
          "purple.200": { value: "#D6BCFA" },
          "purple.300": { value: "#B794F4" },
          "purple.400": { value: "#9F7AEA" },
          "purple.500": { value: "#805AD5" },
          "purple.600": { value: "#6B46C1" },
          "purple.700": { value: "#553C9A" },
          "purple.800": { value: "#44337A" },
          "purple.900": { value: "#322659" },

          "pink.50": { value: "#FFF5F7" },
          "pink.100": { value: "#FED7E2" },
          "pink.200": { value: "#FBB6CE" },
          "pink.300": { value: "#F687B3" },
          "pink.400": { value: "#ED64A6" },
          "pink.500": { value: "#D53F8C" },
          "pink.600": { value: "#B83280" },
          "pink.700": { value: "#97266D" },
          "pink.800": { value: "#702459" },
          "pink.900": { value: "#521B41" },
        },

        fonts: {
          body: { value: "system-ui, sans-serif" },
          heading: { value: "Georgia, serif" },
          mono: { value: "Menlo, monospace" },
        },

        fontSizes: {
          xs: { value: "0.75rem" },
          sm: { value: "0.875rem" },
          md: { value: "1rem" },
          lg: { value: "1.125rem" },
          xl: { value: "1.25rem" },
          "2xl": { value: "1.5rem" },
          "3xl": { value: "1.875rem" },
          "4xl": { value: "2.25rem" },
          "5xl": { value: "3rem" },
          "6xl": { value: "3.75rem" },
          "7xl": { value: "4.5rem" },
          "8xl": { value: "6rem" },
          "9xl": { value: "8rem" },
        },

        fontWeights: {
          hairline: { value: 100 },
          thin: { value: 200 },
          light: { value: 300 },
          normal: { value: 400 },
          medium: { value: 500 },
          semibold: { value: 600 },
          bold: { value: 700 },
          extrabold: { value: 800 },
          black: { value: 900 },
        },

        lineHeights: {
          normal: { value: "normal" },
          none: { value: 1 },
          shorter: { value: 1.25 },
          short: { value: 1.375 },
          base: { value: 1.5 },
          tall: { value: 1.625 },
          taller: { value: "2" },
          "3": { value: ".75rem" },
          "4": { value: "1rem" },
          "5": { value: "1.25rem" },
          "6": { value: "1.5rem" },
          "7": { value: "1.75rem" },
          "8": { value: "2rem" },
          "9": { value: "2.25rem" },
          "10": { value: "2.5rem" },
        },

        letterSpacings: {
          tighter: { value: "-0.05em" },
          tight: { value: "-0.025em" },
          normal: { value: "0" },
          wide: { value: "0.025em" },
          wider: { value: "0.05em" },
          widest: { value: "0.1em" },
        },

        spacing: {
          px: { value: "1px" },
          "0.5": { value: "0.125rem" },
          "1": { value: "0.25rem" },
          "1.5": { value: "0.375rem" },
          "2": { value: "0.5rem" },
          "2.5": { value: "0.625rem" },
          "3": { value: "0.75rem" },
          "3.5": { value: "0.875rem" },
          "4": { value: "1rem" },
          "5": { value: "1.25rem" },
          "6": { value: "1.5rem" },
          "7": { value: "1.75rem" },
          "8": { value: "2rem" },
          "9": { value: "2.25rem" },
          "10": { value: "2.5rem" },
          "12": { value: "3rem" },
          "14": { value: "3.5rem" },
          "16": { value: "4rem" },
          "20": { value: "5rem" },
          "24": { value: "6rem" },
          "28": { value: "7rem" },
          "32": { value: "8rem" },
          "36": { value: "9rem" },
          "40": { value: "10rem" },
          "44": { value: "11rem" },
          "48": { value: "12rem" },
          "52": { value: "13rem" },
          "56": { value: "14rem" },
          "60": { value: "15rem" },
          "64": { value: "16rem" },
          "72": { value: "18rem" },
          "80": { value: "20rem" },
          "96": { value: "24rem" },
        },

        sizes: {
          max: { value: "max-content" },
          min: { value: "min-content" },
          full: { value: "100%" },
          "3xs": { value: "14rem" },
          "2xs": { value: "16rem" },
          xs: { value: "20rem" },
          sm: { value: "24rem" },
          md: { value: "28rem" },
          lg: { value: "32rem" },
          xl: { value: "36rem" },
          "2xl": { value: "42rem" },
          "3xl": { value: "48rem" },
          "4xl": { value: "56rem" },
          "5xl": { value: "64rem" },
          "6xl": { value: "72rem" },
          "7xl": { value: "80rem" },
          "8xl": { value: "90rem" },
          container: {
            sm: { value: "640px" },
            md: { value: "768px" },
            lg: { value: "1024px" },
            xl: { value: "1280px" },
          },
        },

        radii: {
          none: { value: "0" },
          sm: { value: "0.125rem" },
          base: { value: "0.25rem" },
          md: { value: "0.375rem" },
          lg: { value: "0.5rem" },
          xl: { value: "0.75rem" },
          "2xl": { value: "1rem" },
          "3xl": { value: "1.5rem" },
          full: { value: "9999px" },
        },

        zIndex: {
          hide: { value: -1 },
          auto: { value: "auto" },
          base: { value: 0 },
          docked: { value: 10 },
          dropdown: { value: 1000 },
          sticky: { value: 1100 },
          banner: { value: 1200 },
          overlay: { value: 1300 },
          modal: { value: 1400 },
          popover: { value: 1500 },
          skipLink: { value: 1600 },
          toast: { value: 1700 },
          tooltip: { value: 1800 },
        },
      },
    },
  },
});