import { FC } from "react";
import styles from "../styles/EmailList.module.scss";
import parse from "html-react-parser";

type EmailListProps = {
	emailsList: string[];
};
const EmailList: FC<EmailListProps> = ({ emailsList }) => {
	return (
		<div className={styles.list}>
			{emailsList.map((email) => (
				<div>{parse(email)}</div>
			))}
		</div>
	);
};

export default EmailList;
