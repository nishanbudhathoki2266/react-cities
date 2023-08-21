function CitiesCard({ city }) {
  return (
    <div className="flex shadow-lg shadow-gray-400 gap-4 max-w-[1440px] rounded-xl overflow-hidden">
      <div className="flex-1">
        <img
          src={city.image}
          alt={`Image of ${city}`}
          className="object-cover h-64 w-full"
        />
      </div>
      <div className="flex-[2] flex flex-col justify-between py-4 pr-4">
        <div>
          <h2 className="text-4xl font-semibold uppercase">{city.name}</h2>
          <h3 className="text-[#5F5F5F] font-medium text-xl leading-[23.48px]">
            {city.country}
          </h3>
        </div>
        <p className="font-meidum text-xl leading-[31.28px] justify-self-end">
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
