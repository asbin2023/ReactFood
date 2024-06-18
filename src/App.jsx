import DisplayItems from "./components/DisplayItems";
import Header from "./components/Header";
import { CartContextProvider } from "./contexts/CartContext";
function App() {
  return (
    <div className="h-full p-7 pb-20 flex flex-col mx-auto max-w-[2000px] gap-5 ">
      <CartContextProvider>
        <Header />
        <DisplayItems />
      </CartContextProvider>
    </div>
  );
}

export default App;
