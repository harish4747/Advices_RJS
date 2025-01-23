import { useState } from "react";
import Style from "./advice.module.css";
import { useEffect } from "react";

const Advice = () => {
  const [quote, setQuote] = useState("Get Your Todays Advice");
  const [count, setCount] = useState(-1);
  let url = "https://api.adviceslip.com/advice";

  const handleClick = async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();
      setQuote(data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCount(count + 1);
  }, [quote]);

  return (
    <div className={Style.container}>
      <section>
        <div>
          <p>
            <b>&quot;{quote}&quot;</b>
          </p>
        </div>
        <section>
          <button onClick={handleClick}>Advice</button>
        </section>
        <section>
          {count > 0 && (
            <p>
              Your Already read <span>{count}</span> advices
            </p>
          )}
        </section>
      </section>
    </div>
  );
};

export default Advice;
