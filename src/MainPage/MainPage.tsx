import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleFormSubmition = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/results/${inputValue}`);
  };

  return (
    <section className="spaceweb section--main">
      <div className="spaceweb__contentContainer">
        <h1 className="spaceweb__heading">SPACE WEB</h1>
        <p className="spaceweb__content">
          Search through NASA API to explore space. Begin your journey by typing
          something down there
        </p>
        <form className="spaceweb__form" onSubmit={handleFormSubmition}>
          <input
            className="spaceweb__input"
            type="text"
            placeholder="eg. Saturn"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </form>
      </div>
    </section>
  );
};

export default MainPage;
