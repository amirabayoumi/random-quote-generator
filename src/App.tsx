import RandomQuote from "./components/RandomQuote";
import quotesList from "./qoutes.json";

console.log(quotesList);
const quotesArray: string[] = quotesList.quotesList.map((quote) => quote.quote);
const App = () => {
  return (
    <>
      <RandomQuote quotes={quotesArray} />
    </>
  );
};
export default App;
