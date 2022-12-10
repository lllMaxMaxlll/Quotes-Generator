import React from "react";
import { quoteleft, quoteright, linkedin } from "./Icons";
import styles from "./modules-css/Quotes.module.css";

export const Quotes = (props) => {
	React.useEffect(() => {
		props.getQuote();
		// eslint-disable-next-line
	}, [props.text]);

	return (
		<div className={styles.quotebox}>
			<div>
				<h2>
					{quoteleft} {props.quote.text} {quoteright}
				</h2>
				<p className={styles.author}>
					- {props.quote.author ? props.quote.author : "Unknown"} -
				</p>
			</div>

			<div className={styles.buttons}>
				<div>
					<a href='https://www.linkedin.com/in/maximiliano-herr-720634227/'>
						{linkedin}
					</a>
				</div>
				<button
					className={styles.cssbuttons_io}
					onClick={() => props.getQuote()}>
					<span>New Quote</span>
				</button>
			</div>
		</div>
	);
};
