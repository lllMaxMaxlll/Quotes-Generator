import React from "react";
import "./App.css";
import { Quotes } from "./components/Quotes";

const App = () => {
	// 	Save info in state
	const [quote, setQuote] = React.useState({ author: "", text: "" });

	// 	Random number to get random quote
	const random = Math.floor(Math.random() * 1643);

	// 	Fetch getQuote from api
	const getQuote = () => {
		fetch("https://type.fit/api/quotes")
			.then((response) => response.json())
			.then((data) => {
				setQuote({ author: data[random].author, text: data[random].text });
			});
	};

	return (
		<div id='container'>
			<Quotes quote={quote} getQuote={getQuote} />
		</div>
	);
};

export default App;
