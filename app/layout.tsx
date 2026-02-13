export const metadata = {
  title: "DRB Taskforce",
  description: "AI × Crypto Community Intelligence Hub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
