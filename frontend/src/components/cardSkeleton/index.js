const SkeltonCard = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-center items-center space-x-4 animate-pulse">
      <div className="w-full h-60 bg-gray-200 rounded-md"></div>
      <div className=" mt-3 w-24 h-4 bg-gray-200 rounded"></div>
      <div className="mt-3 min-w-full mr-10 h-6 bg-gray-200 rounded"></div>
      <p className=" mt-3 w-12 h-4 bg-gray-200 rounded"></p>
    </div>
  );
};

export default SkeltonCard;
