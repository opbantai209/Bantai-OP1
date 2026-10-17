import '../index.css';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Remix Work Per Hour',
  description: 'A feature-rich PeoplePerHour clone with gig marketplace, custom project proposals, escrow payments, real-time messaging, and buyer/seller dashboards.',
  openGraph: {
    title: 'Remix Work Per Hour',
    description: 'A feature-rich PeoplePerHour clone with gig marketplace, custom project proposals, escrow payments, real-time messaging, and buyer/seller dashboards.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
