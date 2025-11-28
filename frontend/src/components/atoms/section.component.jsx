export default function Section({ children, className, id }) {
  return (
    <section
      id={id}
      className={`min-h-dvh w-full mx-auto container overflow-x-hidden md:px-0 px-4 py-6 ${className}`}
    >
      {children}
    </section>
  );
}
