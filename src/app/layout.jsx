import '../index.css';

export const metadata = {
  title: 'Alpha Mokurumi | Portfolio',
  description:
    'Portfolio of Alpha Mokurumi Morara — software engineer building scalable web applications and distributed systems across frontend, backend, and mobile.',
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-night">{children}</body>
    </html>
  );
}
