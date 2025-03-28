export default function BenefitCard({ icon, title, description }) {
  return (
    <div
      className="flex flex-col items-center text-center mx-auto 
        max-w-xs sm:max-w-xs md:max-w-sm lg:max-w-sm xl:max-w-sm"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-hometext rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 px-2 sm:px-2 md:px-3 lg:px-3 xl:px-4">
        {description}
      </p>
    </div>
  );
}
