function CitiesCard({ city }) {
  return (
    <div className="flex max-sm:flex-col max-sm:p-3 max-sm:h-full max-lg:h-64 max-sm:gap-2 shadow-lg shadow-gray-300 gap-4 max-w-[1440px] rounded-xl overflow-hidden">
      <div className="flex-1">
        <img
          src={city.image}
          alt={`Image of ${city}`}
          className="object-cover h-64 sm:h-full w-full"
        />
      </div>
      <div className="flex-[2] max-sm:px-2 flex flex-col justify-around py-4 gap-4 pr-1 md:pr-6">
        <div>
          <h2 className="sm:text-4xl text-2xl font-semibold uppercase">
            {city.name}
          </h2>
          <h3 className="text-[#5F5F5F] font-medium  sm:text-xl text-lg leading-[23.48px]">
            {city.country}
          </h3>
        </div>
        <p className="font-meidum sm:text-xl max-lg:text-[16px] text-lg leading-[31.28px]">
          {city.description}
        </p>
      </div>
    </div>
  );
}

export default CitiesCard;

// <div className="flex gap-4 w-full">
//         <div className="flex-1 bg-red-900 w-full h-full">
//           <img
//             src={city.image}
//             alt={`Image of ${city.image}`}
//             className="object-contain w-7 h-7"
//           />
//         </div>
//         <div className="flex flex-col justify-between px-4 py-4">
//           <div>
//             <h2 className="text-4xl font-semibold uppercase">{city.name}</h2>
//             <h3 className="text-[#5F5F5F] font-medium text-xl leading-[23.48px]">
//               {city.country}
//             </h3>
//           </div>
//           <p className="font-meidum text-xl leading-[31.28px] justify-self-end">
//             {city.description}
//           </p>
//         </div>
//       </div>
