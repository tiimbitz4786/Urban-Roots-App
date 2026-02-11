import "./globals.css";

export const metadata = {
  title: "Urban Roots",
  description: "Urban Roots Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
