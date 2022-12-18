import React from "react";
import { Route, Switch } from "react-router";
import AddItem from "../Component/AddItem";
import Edit from "../Component/Edit";
import Menu from "../Component/Menu";
import ShowData from "../Component/ShowData";
const HomeRoute = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Menu}></Route>
				<Route exact path='/addItem' component={AddItem}></Route>
				<Route exact path='/editItem/:id' component={Edit}></Route>
				<Route exact path='/showData' component={ShowData}></Route>
			</Switch>
		</>
	);
};

export default HomeRoute;
