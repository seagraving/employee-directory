import logo from './logo.svg';
import './App.css';
import Container from "./components/container"
import {Component} from "react"
import api from "./utils/api"
import Table from "./components/table"
import SearchBox from './components/search/search-box'
import Navbar from './components/navbar';

class App extends Component {
  state = {
    employees: [],
    searchField: "",
    originalEmployees: []
  }
  componentDidMount() {
    api.getRandomPeople().then(peoples => {
      this.setState({
        employees: peoples.data.results,
        originalEmployees: peoples.data.results
      })
    })
  }

  handleChange = e => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
    console.log(value)

    const newEmployees = this.state.originalEmployees.filter(person => {
      return person.name.first.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({
      employees: newEmployees
    })

  }

  render () {
    // const {employees} = this.state
    // const filterName = employees.filter(name =>(
    //   employees.Employees.toLowerCase().includes(searchField.toLowerCase())
    // ))

    return (
      <Container class= "container" >
        <Navbar handleChange= {this.handleChange}  searchField={this.state.searchField}/>
        {/* <SearchBox placeholder="Enter Employee Name" handleChange={(e) => this.setState({searchField:e.target.value})} /> */}
        <Table employees= {this.state.employees} />
      </Container>
    
   );
  }

  

}

export default App;
