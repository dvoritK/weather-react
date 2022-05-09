import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Tel Aviv" />
      </header>
      <footer>
        <a
          href="https://github.com/dvoritK/weather-react.git"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          open-source code
        </a>{" "}
        <span className="coded-by">by Dvorit Karpf-Cogan and </span>
        <a
          href="https://rad-mousse-447c92.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="netlify-link"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
