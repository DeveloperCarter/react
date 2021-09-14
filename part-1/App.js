const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="George" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
