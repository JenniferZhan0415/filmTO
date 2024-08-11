export default function RecommendationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-4">
      {children}
    </section>
  );
}
