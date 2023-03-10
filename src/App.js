import Emoji from "./Composition/Emoji";
import Text from "./Composition/Text";

function App() {
  return (
    <div>
      <Emoji>
       {({addEmoji})=><Text addEmoji={addEmoji}/>}
      </Emoji>
    </div>
  )
}
export default App;