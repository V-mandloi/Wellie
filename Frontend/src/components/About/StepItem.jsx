import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export default function StepItem({ step, title, desc, delay = 0, showArrow = true }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="flex  flex-col items-center top-0">
      <div
        className={`flex flex-col items-center text-center transition-all duration-700 transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <div className="w-12 h-12 flex items-center justify-center bg-hometext text-white font-bold rounded-full shadow mb-4 animate-bounce">
          {step}
        </div>
        <h3 className="text-xl font-semibold text-hometext">{title}</h3>
        <p className="text-gray-600 mb-2">{desc}</p>
      </div>

      {/* Conditional arrow */}
      {showArrow && visible && (
        <ArrowDown className="text-hometext mt-4 animate-bounce" />
      )}
    </div>
  );
}