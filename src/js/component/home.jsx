import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Formulario } from "./Formulario"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Formulario/>
		</div>
	);
};

export default Home;
