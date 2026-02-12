function Section({ id, children }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        {children}
      </div>
    </section>
  );
}

export default Section;
