'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { SnackbarProvider } from './SnackbarContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className} >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <SnackbarProvider> */}
              <Navbar />
              {children}
              <Footer />
            {/* </SnackbarProvider> */}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}