import { AddTransction } from "./Components/AddTransction";
import { Balance } from "./Components/Balance";
import { Header } from "./Components/Header";
import { Transction } from "./Components/Transction";
import { TransctionList } from "./Components/TransctionList";
import { Provider } from "./Context/Context";

function App() {
  return (
    <Provider>
      <Header />
      <div className="container">
        <Balance />
        <Transction />
        <TransctionList />
        <AddTransction />
      </div>
    </Provider>
  );
}

export default App;
