import { Card } from "../../components/smallComponents/card";
import TextHeading from "../smallComponents/heading&subtitle";

export default function HealioPhilosophy() {
  return (
    <section className="bg-green-50 py-12 px-4 md:px-16 text-center">
      <TextHeading
        title="The Wellie Philosophy"
        subtitle="Life is noisy (and that's the way it’s supposed to be!) Nurture your inner quiet with Healio."
      />

      <div className="flex justify-center my-12">
        <img
          src="/healio-app.png"
          alt="Healio App Preview"
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 text-green-900">
        {[
          "Find peace",
          "Live with uncertainty",
          "Reduce stress",
          "Embrace challenges",
          "Be mindful",
          "Manage panic attacks",
        ].map((text, index) => (
          <Card key={index} className="flex items-center">
            <span className="text-2xl mr-2">✔️</span>
            <p className="text-lg font-medium">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
