module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        muted: '#A6ABBD',
        "white": "#ffffff",
        "progress-back": "#596076",
      },
      boxShadow: {
        'bottom': 'inset 0 -1px 0 0 rgba(0, 0, 0, .1)',
        'left': 'inset -1px 0 0 0 rgba(0, 0, 0, .1)',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: [
      {
        myLighttheme: {
          "primary": "#429ffd",
          "secondary": "#463aa1",
          "accent": "#c149ad",
          "neutral": "#021431",
          "base-100": "#fbfcff",
          "base-200": "#f0f6ff",
          "base-content": "#394e6a",
          "info": "#93e6fb",
          "success": "#80ced1",
          "warning": "#efd8bd",
          "error": "#e58b8b",
        },
        myDarktheme: {
          "primary": "#429ffd",
          "secondary": "#828df8",
          "accent": "#f471b5",
          "neutral": "#1d283a",
          "base-100": "#0f1729",
          "info": "#0ca6e9",
          "success": "#2bd4bd",
          "warning": "#f4c152",
          "error": "#fb6f84",
          "grey": "##727687",
        },
      },
    ],
  },
}
