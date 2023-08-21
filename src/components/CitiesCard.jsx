function CitiesCard({ city }) {
  return (
    <div className="max-w-[654px] h-64 flex shadow-lg">
      <div className="flex gap-4 w-full">
        <img
          src={city.image}
          alt={`Image of ${city.image}`}
          className="inline-block w-[33.33%] object-cover"
        />
        <div className="flex flex-col py-5">
          <h2 className="text-4xl font-semibold uppercase">{city.name}</h2>
          <h3 className="text-[#5F5F5F] font-medium text-xl">{city.country}</h3>
          <p className="font-meidum leading-8 text-xl">{city.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CitiesCard;
