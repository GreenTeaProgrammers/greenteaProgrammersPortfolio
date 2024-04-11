import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Box, ChakraBaseProvider } from "@chakra-ui/react";
import Header from "@/components/organism/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Greentea Programmers Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraBaseProvider>
          <Box className={inter.className} minH="100vh" display="flex" flexDir="column">
            <Header bg="#005C53"/>
            <Box flex="1" overflowY="auto" bg="#042940">
              {children}
            </Box>
          </Box>
        </ChakraBaseProvider>
      </body>
    </html>
  );
}
