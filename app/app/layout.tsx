// app/layout.tsx
export const metadata = {
  title: 'A2B Korea',
  description: 'Minimal Next.js app with KO/EN/RU pages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, fontFamily: 'system-ui' }}>{children}</body>
    </html>
  );
}
