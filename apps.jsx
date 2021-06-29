import React from  "react";
import WallGreeter from "./components/greeter.jsx"
import FrontGreetr from "./components/greeter.jsx"
import BackGreeter from "./components/greeter.jsx"

const App = () => {
    let FirstName = "Luke";
    let LastName = "Johnson";
    return <Wallgreeter FirstName={FirstName} LastName={LastName} />;
      
};

export default App;