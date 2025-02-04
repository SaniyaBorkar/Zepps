// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Raleway } from "next/font/google";

// import  "bootstrap/dist/css/bootstrap.min.css"

// import { Gruppo } from "@next/font/google";
// import { Cormorant } from "@next/font/google";
// import { Raleway } from "@next/font/google";

// const cormorant = Cormorant({
//   subsets: ["latin"], // Ensure the Latin subset is included
//   weight: ["400", "600", "700"], // Specify weights available for Cormorant
//   style: ["normal"], // Normal style
//   variable: "--font-cormorant", // Optional for CSS variable usage
// });

const raleway = Raleway({
  subsets: ["latin"], // Ensure the Latin subset is included
  weight: ["400", "600", "700"], // Specify weights available for Cormorant
  style: ["normal"], // Normal style
  variable: "--font-cormorant", // Optional for CSS variable usage
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className}`}
      >
        <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
       
      </body>
    </html>
  );
}


