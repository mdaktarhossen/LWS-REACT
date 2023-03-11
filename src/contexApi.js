import App from "./App";
// create contex;
const counterContex=React.createContext();
export default counterContex;
// wrape parent with context Provider;

return (
  <counterContex.Provider>
    <App/>
  </counterContex.Provider>
);

// Provide a value of the contex a props;
return (
  <counterContex.Provider value={{count:0, increment:increment}}>
    <App/>
  </counterContex.Provider>
);

// Wrape chield with contex consumer;
return (
  <counterContex.Provider>
    <App/>
  </counterContex.Provider>
);

// consumer follow the render pops parten
return (
  <counterContex.Provider >
    ({count, increment})=><App count={count} increment={increment}/>
  </counterContex.Provider>
);

