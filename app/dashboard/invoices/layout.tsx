// app/dashboard/invoices/layout.tsx
export default function InvoicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h1>Invoices</h1>
      {children}
    </section>
  );
}
