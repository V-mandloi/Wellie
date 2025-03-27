const TextBlock = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-green-50 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900">
        {title}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-green-800 mt-2">
        {subtitle}
      </p>
    </div>
  );
};

export default TextBlock;
