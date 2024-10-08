export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center ">
      {children}
    </section>
  );
}
