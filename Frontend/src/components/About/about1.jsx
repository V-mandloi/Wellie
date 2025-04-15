export default function SectionTitle({ title, subtitle }) {
    return (
        <div>
       
      <section className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
       
      </section>
      </div>
    );
  }
  