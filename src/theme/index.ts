import { DefaultTheme } from "styled-components";

declare module 'styled-components' {
   export interface DefaultTheme {
      title: {
         primary: string;
      },
      text: {
         primary: string;
         secondary: string;
      },
      background: {
         primary: string;
         secondary: string;
         primaryAlt: string;
      }
   }
}

export const theme: DefaultTheme = {
   title: {
      primary: '#000',
   },
   text: {
      primary: '#fff',
      secondary: '#000'
   },
   background: {
      primary: '#fff',
      secondary: '#37399A',
      primaryAlt: '#ed52b0'
   }
}