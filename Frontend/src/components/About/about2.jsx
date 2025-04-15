const InfoCard=({ title, description, bgColor = 'bg-white' }) =>{
  return (
    <div
      className={`
        p-8 rounded-xl shadow-md transition-transform duration-300 
        ${bgColor} hover:bg-stone-100 hover:scale-105 cursor-pointer
      `}
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default InfoCard