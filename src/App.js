import "./App.css";
import logo from "./logo.png";
import React, { useState } from "react";
const CryptoJS = require("crypto-js");

function App() {
	const [message, messageSet] = useState("");
	const [key, keySet] = useState("");
	const [result, resultSet] = useState("");

	function encrypt() {
		resultSet(CryptoJS.AES.encrypt(message, key).toString());
	}

	function decrypt() {
		let d = CryptoJS.AES.decrypt(message, key);
		resultSet(d.toString(CryptoJS.enc.Utf8));
	}

	return (
		<div className="app">
			<img src={logo} alt="" className="logo" />
			<textarea
				className="input-text"
				rows="15"
				value={message}
				onChange={(e) => messageSet(e.target.value)}
				placeholder="Type your text here..."
			></textarea>
			<input
				type="text"
				value={key}
				onChange={(e) => keySet(e.target.value)}
				className="input-text"
				placeholder="Encryption Key..."
			/>
			<div className="control-buttons">
				<button onClick={encrypt}>ENCRYPT</button>
				<button onClick={decrypt}>DECRYPT</button>
			</div>
			<h1 className="result-title">Result</h1>
			<div
				className="input-text"
				style={{ minHeight: "300px", wordBreak: "break-all" }}
			>
				{result}
			</div>
			<div className="footer">
				Made with 💚 by{" "}
				<a
					href="https://twitter.com/MarkSShenouda"
					target="_blank"
					rel="noopener noreferrer"
				>
					Mark Shenouda
				</a>
			</div>
		</div>
	);
}

export default App;
