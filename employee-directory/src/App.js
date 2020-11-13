import logo from './logo.svg';
import './App.css';
import Container from "./components/container"
import {Component} from "react"
import api from "./utils/api"
import Table from "./components/table"

class App extends Component {
  state = {
    employees: []
  }
  componentDidMount() {
    api.getRandomPeople().then(peoples => {
      this.setState({
        employees: peoples.data.results
      })
    })
  }

  render () {
    return (
      <Container class= "container">
        <Table employees= {this.state.employees} />
      </Container>
    
   );
  }

}

export default App;
