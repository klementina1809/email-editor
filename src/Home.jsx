import { useState } from "react";
import { EmailEditor } from "./components/EmailEditor.tsx";
import EmailList from "./components/EmailList.tsx";

function Home() {
	const [emailsList, setEmailsList] = useState([]);
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr 0.6fr",
				padding: "1.5rem",
			}}
		>
			<EmailEditor setEmailsList={setEmailsList} />
			<EmailList emailsList={emailsList} />
		</div>
	);
}

export default Home;
