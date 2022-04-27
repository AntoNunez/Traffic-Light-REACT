import React from "react";

class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			isColorSelect: "",
		};
	}

	render() {
		let rojoGlow = " ";
		let amarilloGlow = " ";
		let verdeGlow = " ";

		if (this.state.isColorSelect == "redlight") rojoGlow = "glow";
		if (this.state.isColorSelect == "yellowlight") amarilloGlow = "glow";
		if (this.state.isColorSelect == "greenlight") verdeGlow = "glow";
		console.log(this.state);
		return (
			<div className="Contenedor">
				<div id="sujetador"></div>
				<div id="caja">
					<div
						onClick={() =>
							this.setState({ isColorSelect: "redlight" })
						}
						className={"redlight " + rojoGlow}></div>
					<div
						onClick={() =>
							this.setState({ isColorSelect: "yellowlight" })
						}
						className={"yellowlight " + amarilloGlow}></div>
					<div
						onClick={() =>
							this.setState({ isColorSelect: "greenlight" })
						}
						className={"greenlight " + verdeGlow}></div>
				</div>
			</div>
		);
	}
}
export default TrafficLight;
