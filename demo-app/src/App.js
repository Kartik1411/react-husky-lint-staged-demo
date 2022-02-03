import logo from "./logo.svg";
import "./App.css";
import DemoComponent from "./components/demo-component";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          r
          el="noopener noreferrer"
          rel="noreferrer"
        >
          Demo for eslint, prettier with eslint, husky and lint-staged
        </a>
      </header>
      <DemoComponent />
    </div>
  );
}
export default App;
