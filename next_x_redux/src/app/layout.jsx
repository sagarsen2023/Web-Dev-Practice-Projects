"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import store from "@/store/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
   <Provider store={store}>
     <html lang="en">
      <title> Next X Redux</title>
      <body className={inter.className}>{children}</body>
    </html>
   </Provider>
  );
}
