import "./App.css";
import Country from "./Country";
import countries from "./countries";

function App() {
  const countriesComponents = Object.keys(countries).map((country) => {
    return (
      <Country
        countryName={countries[country]}
        countryAbbreviation={country}
        countryFlag={
          "https://flagcdn.com/128x96/" + country.toLowerCase() + ".png"
        }
      />
    );
  });

  return (
    <div className="App">
      <h1>Countries of the World</h1>
      <div className="countries">{countriesComponents}</div>
    </div>
  );
}

export default App;
