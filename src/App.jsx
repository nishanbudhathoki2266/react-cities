import paris from "./assets/cities/paris.jpg";
import london from "./assets/cities/london.jpg";
import barcelona from "./assets/cities/barcelona.jpg";
import prague from "./assets/cities/prague.jpg";
import CitiesCard from "./components/CitiesCard";

const citiesData = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    description:
      "Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, culture, fashion, gastronomy and many areas.",
    image: paris,
  },
  {
    id: 2,
    name: "London",
    country: "United Kingdom",
    description:
      "When exploring London, you will come across lots of excitement by chance, so try to take everything in rather than just rushing around to all of the major tourist haunts.",
    image: london,
  },
  {
    id: 3,
    name: "Barcelona",
    country: "Spain",
    description:
      "Since the 17th ceOverlooking the Mediterranean Sea, and famous for Gaudí and other Art Nouveau architecture, Barcelona is one of Europe's trendiest cities.",
    image: barcelona,
  },
  {
    id: 4,
    name: "Prague",
    country: "Czech Republic",
    description:
      "Old-world charm meets modern vibrancy in Europe's capital of stunning architecture, with the iconic Charles Bridge and a captivating cultural scene.",
    image: prague,
  },
];

function App() {
  return (
    <main className="bg-white h-screen px-2 md:px-8 py-8 font-raleway max-w-[1440px] mx-auto">
      <h1 className="text-2xl mt-8 text-left max-sm:text-center sm:text-4xl font-bold uppercase leading-10">
        Cities to visit in Europe
      </h1>

      <div className="grid mt-8 lg:grid-cols-2 max-sm:max-w-lg max-sm:mx-auto sm:grid-cols-1 sm:gap-8 gap-8">
        {citiesData.map((city) => (
          <CitiesCard city={city} key={city.id} />
        ))}
      </div>
    </main>
  );
}

export default App;
