import StepItem from "./StepItem.jsx"; 
import Design1 from "../../assets/ImgMob.jpg"

export default function StepsSection() {
  const steps = [
    {
      title: "Create an Account",
      desc: "Sign up with your email to get started",
    },
    {
      title: "Upload & Manage",
      desc: "Easily upload and organize your documents",
    },
    {
      title: "Share & Collaborate",
      desc: "Work with your team and track progress",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center mr-12 ml-12 justify-center gap-10 py-0 bg-primary px-4 md:px-12">
      {/* Image on the left */}
      <div className="w-50 sm:w-45  md:w-30 lg:w-60 transition-transform duration-300">
        <img
          src={Design1}
          alt="Illustration Design"
          className="w-full max-w-sm mx-auto border-solid border-2 border-gray-300 rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl active:scale-[0.98]"
        />
      </div>

      {/* Steps on the right */}
      <div className="flex flex-col items-center gap-6 md:w-1/2">
        <h1 className="text-3xl font-extrabold text-hometext">How It Works</h1>
        {steps.map((step, index) => (
          <StepItem
            key={index}
            step={index + 1}
            title={step.title}
            desc={step.desc}
            delay={index * 500}
            showArrow={index !== steps.length - 1} // Show arrow only for the first two steps
          />
        ))}
      </div>
    </div>
  );
}