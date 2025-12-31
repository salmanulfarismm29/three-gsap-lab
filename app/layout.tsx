import { ThemeProvider } from "./components/theme/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider initial="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
