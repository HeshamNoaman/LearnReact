
// basic structure
/*
function App() {
  return (
    <div>Hello World!</div>
  );
}
*/

// with props
function App(props) {

  const colorStyle = {
    color: props.color,
    fontSize: props.size
  }

  return (
    <div>
      <div style={colorStyle}>Hello World!</div>
    </div>
  );
}

export default App;