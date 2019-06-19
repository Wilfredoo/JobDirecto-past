import React from "react";

export const languages = {
  spanish: {
    title: "Trabajos en Nueva York"
  },

  english: {
    title: "Jobs in New York"
  }
};
export const LanguageContext = React.createContext(languages.spanish);
