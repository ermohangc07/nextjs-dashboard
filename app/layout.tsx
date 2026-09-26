import '@/app/ui/global.css';
import { inter } from './fonts';   // ✅ use relative path

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
