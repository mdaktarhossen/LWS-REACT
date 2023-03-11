
import ClickCounter from "./COMPONENTS/ClickCounter";
import Counter from "./COMPONENTS/Counter";
import HoverCounter from "./COMPONENTS/HoverCounter"

function App() {
  return (
    <div>
      {/* <Users render={(islog)=>islog? "Akter": "no"}/> */}

      <Counter >
        {(Counter, handelIncrement)=><ClickCounter count={Counter} 
        handelIncrement={handelIncrement}/>}
      </Counter >

      <Counter >
      {(Counter, handelIncrement)=><HoverCounter count={Counter} 
        handelIncrement={handelIncrement}/>}
      </Counter >
    </div>
  )
}
export default App;