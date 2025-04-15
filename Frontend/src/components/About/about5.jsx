import SectionTitle from "../../components/About/about1.jsx";
import InfoCard from "../../components/About/about2.jsx";
import StepItem from "../../components/About/about3.jsx";
import StepsSection from "./about4.jsx";
import AllCards from "./about7.jsx";
// import App from "./about7.jsx";
// import InfoCard from "./about2.jsx";

export default function AboutPage() {
  const steps = [
    { step: "1", title: "Create an Account", desc: "Register as a user or admin to access the document system." },
    { step: "2", title: "Upload & Manage", desc: "Add your documents with metadata and set permissions easily." },
    { step: "3", title: "Collaborate & Track", desc: "Work with your team and keep a log of all activity for full transparency." },
  ];

  return (
    <div className="bg-primary min-h-screen px-6 md:px-20 py-20 space-y-20">
      {/* Section Title */}
      
      
      <SectionTitle
        title="About Our Document Management System"
        subtitle="Our mission is to streamline how teams manage documents by providing a secure, efficient, and user-friendly platform."
      />
     
          

      {/* Info Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
    
        <InfoCard
          title="🌟 Our Mission"
          description="To empower organizations to manage and track documents effortlessly while maintaining top-tier security and accessibility."
          bgColor="bg-secondary"
        />
        <InfoCard
          title="🚀 Our Vision"
          description="To become the most trusted and intuitive document management solution for teams worldwide."
          bgColor="bg-secondary"
        />
      </section>

      {/* Steps */}
      <section>
        <StepsSection/>
        {/* <SectionTitle title="How It Works" />
        <div className="space-y-10">
          {steps.map((item, i) => (
            <StepItem key={i} {...item} />
          ))}
        </div> */}
      </section>
      <section>
        <AllCards/>
      </section>
    </div>
  );
}
