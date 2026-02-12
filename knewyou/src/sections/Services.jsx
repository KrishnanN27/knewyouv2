import s1 from "../assets/services/s1.jpg";
import s2 from "../assets/services/s2.PNG";
import s3 from "../assets/services/s3.jpg";
import s4 from "../assets/services/s4.jpg";
import s5 from "../assets/services/s5.jpg";
import s6 from "../assets/services/s6.PNG";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Holistic Beauty Services",
      desc: "Inner + outer care. Self-expression. Wellness-based grooming. Hair services offered with presence and prayer.",
      image: s1,
    },
    {
      title: "Image & Identity Consulting",
      desc: "Personal presence coaching. Styling + soul alignment. Christian confidence rooted in values and wisdom.",
      image: s2,
    },
    {
      title: "Family-Centered Care",
      desc: "Thoughtful accommodations. Parent and child-friendly spaces. Environments designed to keep families united.",
      image: s3,
    },
    {
      title: "Restoration & Renewal Experiences",
      desc: "Retreat-style offerings, prayer spaces, sabbath rhythms, and guided inner healing.",
      image: s4,
    },
    {
      title: "Children’s Drop-In Care",
      desc: "Safe, Spirit-filled support. Faith-based, trauma-informed nurturing and intentional play.",
      image: s5,
    },
    {
      title: "Workshops & Community Gatherings",
      desc: "Events blending beauty, faith, healing, and joy — classes, prayer nights, style therapy, rites of passage.",
      image: s6,
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>
          Thoughtfully crafted offerings designed to restore identity,
          strengthen families, and reflect heaven’s beauty.
        </p>
      </div>

      <div className="services-wrapper">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-row ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div
              className="service-image"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
