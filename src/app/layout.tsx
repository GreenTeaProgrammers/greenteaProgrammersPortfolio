import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ChakraBaseProvider } from "@chakra-ui/react";
import Header from "@/components/organism/header";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greentea Programmers Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headingHeight = "100px";
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraBaseProvider theme={theme}>
          <Header bg="#005C53" height={headingHeight} />
          <Box flex="1" overflowY="auto" bg="#042940" paddingTop={headingHeight} minH="100vh">
            {children}
          </Box>
        </ChakraBaseProvider>
      </body>
    </html>
  );
}
