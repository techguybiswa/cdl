import React from "react";
import DataTable from './DataTable'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        Hello indiex
        <DataTable/>
      </div>
    );
  }
}

export default App;
