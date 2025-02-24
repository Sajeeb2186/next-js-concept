import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "sajeeb",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

       


        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        
        <Navbar></Navbar>

         <div className="h-screen">
         {children}
         </div>


        <footer>
          <h4>THis is my footer</h4>
        </footer>




      </body>
    </html>
  );
}
