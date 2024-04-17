function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello Hesham Mohammed</h1>
      <h2>the date now is {currDate.toLocaleString()}</h2>
    </div>
  );
}

export default App;
