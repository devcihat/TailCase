import "./App.css";

import Main from "./components/Main";
import Product from "./components/Cart";
import { DataProvider } from "./DataProvider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Main />
        <Product />
      </div>
    </DataProvider>
  );
}

export default App;
