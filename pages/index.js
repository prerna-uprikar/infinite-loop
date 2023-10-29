import Image from "next/image";
import logo from "../src/logo.svg";
import Home from '../src/components/Home'
import styles from '../src/components/Home.module.css'

function App() {
	return (
		<div className="App">
			<iframe src="https://www.tooplate.com/live/2117_infinite_loop" className={styles.iframe}></iframe>
		</div>
	);
}

export default App;
