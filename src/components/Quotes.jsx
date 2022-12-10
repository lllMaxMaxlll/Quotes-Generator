import React from "react";
import { quoteleft, quoteright, linkedin } from "./Icons";
import styles from "./modules-css/Quotes.module.css";

export const Quotes = (props) => {
	React.useEffect(() => {
		props.getQuote();
		// eslint-disable-next-line
	}, [props.text]);

	return (
		<div id='quote-box' className={styles.quotebox}>
			<div>
				<h2 id='text'>
					{quoteleft} {props.quote.text} {quoteright}
				</h2>
				<p id='author' className={styles.author}>
					- {props.quote.author ? props.quote.author : "Unknown"} -
				</p>
			</div>

			<div id='buttons' className={styles.buttons}>
				<div>
					<a href='https://www.linkedin.com/in/maximiliano-herr-720634227/'>
						{linkedin}
					</a>
				</div>
				<button
					id='new-quote'
					className={styles.cssbuttons_io}
					onClick={() => props.getQuote()}>
					<span>New Quote</span>
				</button>
			</div>
		</div>
	);
};
