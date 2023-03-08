import Clock from "./COMPONENTS/Clock";

function App(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <Clock />
    </div>
  )
}
export default App;