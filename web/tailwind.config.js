/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // cursor: {
      //   dot: "url(/cursor.png), pointer",
      // },
      boxShadow: {
        "banner-btn": "0px 3px 12px 0px rgba(74, 58, 255, 0.18)",
        "calendy-box": "0 0 9.12847px -0.829861px #da3654",
        "calendy-name": "0 0 9.12847px -0.829861px #00000040",
        "jamstack-btn": "0 0.1875em 0.75em #4a3aff2e",
        "review-btn": "0 0.1875em 0.75em #4a3aff2e",
        "hire-btn": "0 3.584px 26.88px #fff3",
        "process-work": "2px 2px 6px 0px rgba(0,0,0,.6)",
        "book-btn-shadow": "0 3.584px 26.88px #fff3",
        "contact-box": "0 0 8.52133px -0.774667px #00000040",
        "client-box": "0 3px 11px #00000054",
        "pricing-box": "0 4.15972px 13.3111px #080f340f",
        "input-box": "0 1.66389px 4.99167px #13124212",
        priceCard: "0px 4.16667px 13.33333px 0px rgba(8, 15, 52, 0.06)",
        "page-speed-box": "0px 4px 10px 0px rgba(74, 58, 255, 0.18)",
        "white-lable":
          "0.633296px 0.633296px 1.26659px #ffffff4d, -0.633296px -0.633296px 1.26659px #d1d9e680, inset -3.16648px 3.16648px 6.33296px #d1d9e633, inset 3.16648px -3.16648px 6.33296px #d1d9e633, inset -3.16648px -3.16648px 6.33296px #ffffffe6",
        "timeOfferbox" : "0 3px 5px #7c7c7c"
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#DA3654",
              fontFamily: "DM",
            },
          },
        },
      },
      maxHeight: {
        calc: "calc(100vh - 32.375em)",
      },
      maxWidth: {
        'max-w-msm': '23rem',
      }
    },
    borderSpacing: {
      2.5: "2.5rem 0",
    },
    colors: {
      "black-color": "#1fb6ff",
      "black-color": "#000000",
      "white-color": "#FFFFFF",
      "blue-color": "#000EE6",
      "simple-blue-color": "#00f",
      "dark-blue": "#222549",
      "btn-hover-blue": "#21222C",
      "dark-pink": "#DA3654",
      "btn-hover-pink": "#600C1B",
      "light-pink": "rgba(218, 54, 84, 0.4)",
      "light-blue": "#4A3AFF",
      "title-blue-shade": "#110462",
      "menu-title-text": "#304256",
      "purple-color": " #5D63A9",
      "dark-gray": "#4c4c4c",
      "dark-gray-shade": "#6d6e76",
      "dark-gray-shade1": "#6d6e67",
      "dark-gray-shade2": "#6d6e761a",
      "black-shade-color": "#232536",
      "gray-text-color": "#9c9c9c",
      "gray-light-color": "#909090",
      "text-light-blue": "#3BAFDE",
      "white-shad-color": "#f4fbff",
      "red-color": "#FF0000",
      "dove-gray-color": "#616161",
      "Cerise-red": "#da3654",
      "whisper-color": "#EFF0F7",
      "gallery-color": "#EBEBEB",
      "pumpkin-color": "#FF871F",
      "carissma-color": "#E88DA3",
      "topaz-color": "#827D92",
      "lily-White": "#E5F6FF",
    },
    fontFamily: {
      // DM: ["DM Sans", "sans-serif"],
      // Inter: ["Inter", "sans-serif"],
      // Mont: ["Montserrat", "sans-serif"],
      DM: "var(--font-dm-serif)",
      Inter: "var(--font-inter-serif)",
      Mont: "var(--font-mont-serif)",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    screens: {
      lsm: "350px",

      esm: "400px",

      em: "480px",

      ew: "510px",

      vem: "560px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      emd: "999px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xlg: "1150px",

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "1xl": "1440px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
    },
    backgroundImage: {
      "line-gradient":
        "linear-gradient(111.02deg,#222549 24.12%,#DA3654 101.68%);",
      "comparision-gradient":
        "linear-gradient(326.13deg,#222549 29.54%,#DA3654 137.39%);",
      "comparision-inner-gradient":
        "linear-gradient(56.32deg,rgba(74,58,255,.2) -19.89%,rgba(74,58,255,0) 32.85%),linear-gradient(111.02deg,#F4FBFF 24.12%,#F3DEE5 101.68%)",
      "review-gradient":
        "linear-gradient(100.33deg,#222549 30.71%,#DA3654 179.97%);",
      "dashed-gradient":
        "linear-gradient(90deg, rgba(218, 54, 84, 0.5019607843) 50%, transparent 20%), linear-gradient(90deg, rgba(218, 54, 84, 0.5019607843) 50%, transparent 20%), linear-gradient(0deg, rgba(218, 54, 84, 0.5019607843) 50%, transparent 20%), linear-gradient(0deg, rgba(218, 54, 84, 0.5019607843) 50%, transparent 20%);",
      "compare-framework-gradient":
        "linear-gradient(56.32deg, rgba(74, 58, 255, 0.2) -19.89%, rgba(74, 58, 255, 0) 32.85%), linear-gradient(111.02deg, #F4FBFF 24.12%, #F3DEE5 101.68%);",
      "testimonial-gradient":
        "linear-gradient(130.33deg, #222549 29.71%, #DA3654 179.97%)",
      "table-footer-gradient":
        "linear-gradient(56.32deg, rgba(74, 58, 255, 0.2) -19.89%, rgba(74, 58, 255, 0) 32.85%), linear-gradient(111.02deg, #F4FBFF 24.12%, #F3DEE5 101.68%)",
      "dark-gradient":
        "linear-gradient(111.02deg, #222549 24.12%, #DA3654 101.68%)",
      "hero-gradient":
        "radial-gradient(circle,#f3dadf,#f2dfe6,#f1e5ec,#f1eaf0,#f2eff3,#f2eff4,#f2f0f6,#f1f0f7,#ededf8,#e9eafa,#e3e7fb,#dde4fd);",
      "hire-remote-gradient":
        "linear-gradient(to right bottom,#ffffff,#f9f9fe,#f2f3fd,#eaedfd,#e1e8fc,#e2e6fc,#e3e5fb,#e5e3fa,#f0e5f7,#f7e7f5,#fceaf2,#ffeef1)",
      "casestudy-gradient":
        "linear-gradient(56.32deg, rgba(63, 100, 178, 0.2) -19.89%, rgba(74, 58, 255, 0) 32.85%), linear-gradient(111.02deg, #fff 17.12%, #f3dee5 190.68%);",
      "newsletter-gradient":
        "linear-gradient(174.11deg,#222549 3.42%,#DA3654 116.03%)",
      "compare-gradient":
        "linear-gradient(56.32deg,rgba(74,58,255,.2) -19.89%,rgba(74,58,255,0) 32.85%),linear-gradient(111.02deg,#F4FBFF 24.12%,#F3DEE5 101.68%)",
      "compare-row-gradient":
        "linear-gradient(91.59deg,#F10A7D 0%,#FA6F52 100%)",
      "compare-dark-gradient":
        "linear-gradient(326.13deg,#222549 29.54%,#DA3654 137.39%)",
      "last-column-gradient":
        "linear-gradient(56.32deg,rgba(74,58,255,.2) -19.89%,rgba(74,58,255,0) 32.85%),linear-gradient(90.5deg,#F4FBFF 24.12%,#F3DEE5 101.68%)",
      "tooltip-hover-gradient":
        "linear-gradient(56.32deg,rgba(74,58,255,.2) -19.89%,rgba(74,58,255,0) 32.85%),linear-gradient(111.02deg,#F4FBFF 24.12%,#F3DEE5 101.68%)",
      "tooltip-gradient":
        "linear-gradient(56.32deg,rgba(74,58,255,.2) -19.89%,rgba(74,58,255,0) 32.85%),linear-gradient(111.02deg,#F4FBFF 24.12%,#F3DEE5 101.68%)",
      "bookhero-gradient":
        "linear-gradient(56.32deg,rgba(74,58,255,.2) -19.89%,rgba(74,58,255,0) 32.85%),linear-gradient(111.02deg,#F4FBFF 24.12%,#F3DEE5 101.68%)",
      "pricing-gradient": "linear-gradient(0deg,#f4fbff,#f4fbff)",
      pageSpeedGradient:
        "linear-gradient(56deg, rgba(74, 58, 255, 0.20) -19.89%, rgba(74, 58, 255, 0.00) 32.85%), linear-gradient(111deg, #F4FBFF 24.12%, #F3DEE5 101.68%)",
      "hire-dedicate-comparision": "linear-gradient(86.13deg,#222549 29.54%,#DA3654 150.39%)",
      "comparision-table": "linear-gradient(100.33deg,#222549 30.71%,#DA3654 150.97%)"
    },
    backgroundPosition: {
      pos: "92% 1.25em",
      clientMapPos: "100%",
      sendBtn: "left 1em center",
    },
    backgroundSize: {
      selectBgsize: "0.75em",
      arrowSize: "contain",
      arrowSizeRespon: "1.5em",
      middleArrow: "2.5em",
      ResposivemiddleArrow: "2em",
      edgeSize: "4em",
      mdedgeSize: "2.5em",
      esmedgeSize: "2em",
      gifSize: "3.5em",
      heroBgsize: "400%",
      tableArrowBg: "contain",
      bgCover: "100% 100%",
      clientMapPos: "100%",
      clientMap: "contain",
      clientComa: "1em",
      sendBtn: "1.3em",
    },
    keyframes: {
      gradients: {
        "0%": { backgroundPosition: "0 0" },
        "25%": { backgroundPosition: "25% 50%" },
        "50%": { backgroundPosition: "50% 75%" },
        "60%": { backgroundPosition: "75% 100% " },
        "75%": { backgroundPosition: "100% 125%" },
        "100%": { backgroundPosition: "125% 150%" },
      },
      rotations: {
        "0%": { transform: "rotate(0)" },
        "100%": { transform: "rotate(359deg)" },
      },
      scroll: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(-250px * 7))" },
      },
    },
    animation: {
      dash: "dash 40s linear infinite",
      gradient: "gradients 10s linear infinite",
      spin: "rotations 50s linear infinite",
      scroll: "scroll 40s linear infinite",
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
