import TodosContainer from "./containers/todos";
import TodosContextProvider from "./contexts/TodosContext";

function App() {
  return (
    <div className="">
      <div className="pt-20">
        <h1 className="text-5xl font-extralight text-center">Todo App</h1>
      </div>
      <TodosContextProvider>
        <TodosContainer />
      </TodosContextProvider>
      {/* <div className="text-center text-xs">
        <p>
          Created with ❤️ by{" "}
          <a
            className="text-blue-600"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            Shubham
          </a>
        </p>
      </div> */}
    </div>
  );
}

export default App;
