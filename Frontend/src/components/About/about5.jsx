import SectionTitle from "../../components/About/about1.jsx";
import InfoCard from "../../components/About/about2.jsx";
import StepItem from "../../components/About/about3.jsx";
import StepsSection from "./about4.jsx";
import AllCards from "./about7.jsx";
import ContactUs from "./about8.jsx";
import ContactCard from "./ContactUs.jsx";
// import App from "./about7.jsx";
// import InfoCard from "./about2.jsx";

export default function AboutPage() {
  const steps = [
    { step: "1", title: "Create an Account", desc: "Register as a user or admin to access the document system." },
    { step: "2", title: "Upload & Manage", desc: "Add your documents with metadata and set permissions easily." },
    { step: "3", title: "Collaborate & Track", desc: "Work with your team and keep a log of all activity for full transparency." },
  ];

  return (
    <div className="bg-primary min-h-screen px-6 md:px-20 py-7 space-y-20">
      {/* Section Title */}
      
      
      <SectionTitle
        title="About Our Document Management System"
        subtitle="Our mission is to streamline how teams manage documents by providing a secure, efficient, and user-friendly platform.Write, reflect, and grow with Wellie! Capture daily thoughts, track moods, and practice gratitude in a secure, distraction-free journal. Download now!"
      />
     
      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 py-1 gap-10">
    
        <InfoCard
          title="🌟 Our Mission"
          description="To support mindful living through simple, daily self-reflection. Wellie exists to make mental clarity, emotional wellness, and personal growth feel natural, accessible, and part of everyday life—for everyone, everywhere."
          bgColor="bg-secondary"
        />
        <InfoCard
          title="🚀 Our Vision"
          description="To create a world where wellness is not a luxury, but a daily habit. We envision Wellie as the go-to space for calm, clarity, and growth—empowering people to feel more grounded, more present, and more in tune with themselves."
          bgColor="bg-secondary"
        />
      </section>

      {/* Steps */}
      <section className="py-0">
        <StepsSection/>
      </section>
     <section >
     <AllCards/>
     </section>
     
      <section className="py-0 top-0">
       <ContactCard/>
        {/* <ContactUs/> */}
      </section>
    </div>
  );
}
