import react, { Component } from "react";
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from "./MenuComponents";
import Dishdetail from "./DishdetailComponents";
import { DISHES } from "../shared/dishes";

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
      
    };
  }

  onDishSelected(dishId){
    this.setState({
        selectedDish:dishId
    })
};

  render(){
    return (
    <div className="App">
      <Navbar dark color = "primary">
        <div className = "container">
          <NavbarBrand href = "/">Hello</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelected(dishId)}/>
      <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
    </div>
  );
}
};

export default Main;
