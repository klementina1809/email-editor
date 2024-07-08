import { useState, FC } from "react";
import { Eraser, Bold, Italic, Underline } from "lucide-react";
import styles from "../styles/EmailEditor.module.scss";
import parse from "html-react-parser";

type EmailEditorProps = {
	setEmailsList: React.Dispatch<React.SetStateAction<string[]>>;
};

export const EmailEditor: FC<EmailEditorProps> = ({ setEmailsList }) => {
	const [text, setText] = useState(
		` Salve, mi chiamo Albina Khomenko. Sono una sviluppatrice web junior specializzata nel front-end, con un particolare focus su React. Al momento ho una solida conoscenza di HTML, CSS e JavaScript, ho esperienza pratica nella creazione di moderne applicazioni web e nell'implementare componenti riutilizzabili. So utilizzare Git per lo sviluppo collaborativo e controllo di versione, oltre a gestire varie librerie tramite npm. Negli ultimi 3 mesi ho sviluppato 15 progetti utilizzando React, i quali sono visualizzabili nel mio portfolio. Tra i progetti che ho sviluppato ci sono sia applicazioni a pagina singola (SPA) che multipage (create usando librerie di routing).`
	);
	const [selectedText, setSelectedText] = useState("");

	const handleSelectionChange = () => {
		const selection = window.getSelection();
		if (selection) {
			const newSelectedText = selection.toString();
			setSelectedText(newSelectedText);
		}
	};

	const handleSend = () => {
		setEmailsList((prev: string[]) => [...prev, text]);
		setText("");
	};

	const applyBold = () => {
		setText(text.replace(selectedText, `<strong>${selectedText}</strong>`));
	};

	const applyItalic = () => {
		setText(text.replace(selectedText, `<em>${selectedText}</em>`));
	};

	const applyUnderline = () => {
		setText(text.replace(selectedText, `<u>${selectedText}</u>`));
	};

	return (
		<div>
			<h1>Email editor</h1>
			<div className={styles.card}>
				<div className={styles.prevue}>{parse(text)}</div>
				<textarea
					className={styles.editor}
					value={text}
					onMouseUp={handleSelectionChange}
					onChange={(e) => setText(e.target.value)}
				></textarea>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button onClick={applyBold}>
							<Bold size={18} />
						</button>
						<button onClick={applyItalic}>
							<Italic size={18} />
						</button>
						<button onClick={applyUnderline}>
							<Underline size={18} />
						</button>
						<button>
							<Eraser size={18} onClick={() => setText("")} />
						</button>
					</div>
					<button onClick={handleSend}>Send now</button>
				</div>
			</div>
		</div>
	);
};
