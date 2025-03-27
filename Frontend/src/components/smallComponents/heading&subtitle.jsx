const TextBlock = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-primary w-2xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-hometext">
        {title}
      </h2>
      <p
        className="text-sm sm:text-base md:text-lg text-D29F80 mt-2 
        max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
        px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16"
      >
        {subtitle}
      </p>
    </div>
  );
};

export default TextBlock;
