import { Eraser, Bold, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";
import parse from "html-react-parser";
import { useState, useRef } from "react";

export function EmailEditor({ setEmailsList }) {
	const [text, setText] = useState(
		`Hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus beatae et quibusdam dolorum voluptas commodi, veritatis voluptate similique vero dignissimos laboriosam eos excepturi, reiciendis ipsum aperiam inventore provident mollitia modi?`
	);
	const [selectedText, setSelectedText] = useState("");
	const editorRef = useRef(null);

	const handleSelectionChange = () => {
		const selection = window.getSelection();
		if (selection) {
			const selectedText = selection.toString();
			setSelectedText(selectedText);
		}
	};

	const handleSend = () => {
		setEmailsList((prev) => [...prev, text]);
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
				<div
					contentEditable
					ref={editorRef}
					className={styles.editor}
					onKeyUp={handleSelectionChange}
					onMouseUp={handleSelectionChange}
					onInput={(e) => setText(e.currentTarget.innerText)}
					suppressContentEditableWarning={true}
				>
					{text}
				</div>
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
}
