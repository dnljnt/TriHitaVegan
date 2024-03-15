module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        card: "#f2f7f5",
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        headline: ["'Archivo Black'", "sans-serif"],
      },
      fontSize: {
        sm: "clamp(0.8rem, 0.08vw + 0.78rem, 0.84rem)",
        base: "clamp(1rem, 0.23vw + 0.94rem, 1.13rem)",
        lg: "clamp(1.25rem, 0.45vw + 1.14rem, 1.5rem)",
        xl: "clamp(1.56rem, 0.79vw + 1.36rem, 2rem)",
        "2xl": "clamp(1.95rem, 1.29vw + 1.63rem, 2.66rem)",
        "3xl": "clamp(2.44rem, 2.02vw + 1.94rem, 3.55rem)",
        "4xl": "clamp(3.05rem, 3.06vw + 2.29rem, 4.73rem)",
        "5xl": "clamp(3.81rem, 4.54vw + 2.68rem, 6.31rem)",
        "6xl": "clamp(4.77rem, 6.63vw + 3.11rem, 8.41rem)",
      },
      keyframes: {
        leaf1: {
          from: { transform: "translateY(0) rotate(-15deg)" },
          to: { transform: "translateY(10px) rotate(15deg)" },
        },
        leaf2: {
          from: { transform: "translateY(30px) rotate(12deg)" },
          to: { transform: "translateY(0) rotate(-25deg)" },
        },
        brokoli: {
          from: { transform: "translateY(20px) rotate(5deg)" },
          to: { transform: "translateY(0) rotate(-10deg)" },
        },
        cardSlider: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        clock: {
          from: { transform: "rotate(-15deg)" },
          to: { transform: "rotate(15deg)" },
        },
        star: {
          "0%, 100%": { transform: "scale(1.3) rotate(-14deg)" },
          "50%": { transform: "scale(1) rotate(14deg)" },
        },
      },
      animation: {
        leaf1: "leaf1 5s linear infinite alternate-reverse",
        leaf2: "leaf2 5s linear infinite alternate-reverse",
        brokoli: "brokoli 5s 0.3s linear infinite alternate-reverse",
        cardSlider: "cardSlider 8s linear infinite",
        star: "star .6s 1s linear alternate-reverse",
        clock: "clock .8s linear infinite alternate-reverse",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
