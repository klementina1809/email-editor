import styles from "./EmailList.module.scss";
import parse from "html-react-parser";


function EmailList({emailsList}) {

	return (
		<div className={styles.list}>
			{emailsList.map((email) => (
				<div>{parse(email)}</div>
			))}
		</div>
	);
}

export default EmailList;
