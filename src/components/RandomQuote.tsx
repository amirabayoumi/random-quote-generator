import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  type getRandomQuote,
  type handelClick,
  type randomQouetsCounter,
  type toClipboard,
  type RandomQuoteProps,
} from "../types";
const RandomQuote = ({ quotes }: RandomQuoteProps) => {
  const [randomQuote, setRandomQuote] = useState<string>(
    "Welcome to Random Quote Generator Tool press the dice below to genrate your qouets "
  );
  const [qoutesCounter, setqouetsCounter] = useState<number>(0);
  const getRandomQuote: getRandomQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  const getNewQuote = () => {
    getRandomQuote();
  };

  const randomQouetsCounter: randomQouetsCounter = () => {
    return setqouetsCounter(Math.floor(Math.random() * quotes.length));
  };
  const handelClick: handelClick = () => {
    getNewQuote();
    randomQouetsCounter();
  };

  const toClipboard: toClipboard = async () => {
    try {
      await navigator.clipboard.writeText(randomQuote);
      console.log("Copied to clipboard");
    } catch (error) {
      console.error("Failed to copy to clipboard:", error);
    }
  };

  const handleCopy = () => {
    toClipboard();
    toast.success("Copied to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <section>
        <h1>{qoutesCounter ? "QOUTE #" + qoutesCounter : ""}</h1>
        <p>{randomQuote}</p>
        <i onClick={handleCopy}>▢</i>
        <ToastContainer />
        <div>
          <button onClick={handelClick}>⁙</button>
        </div>
      </section>
    </>
  );
};
export default RandomQuote;
