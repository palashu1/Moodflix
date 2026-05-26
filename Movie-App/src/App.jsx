import "./App.css";

function App() {
  return (
    <>
      <Text display="Whats up" />
      <Text display="Hello">
        <h1>I am children</h1>
      </Text>
    </>
  );
}

function Text({ display, children }) {
  return (
    <div>
      <p>{display}</p>
      <h2>{children}</h2>
    </div>
  );
}

export default App;
