import { Eraser, Bold, Italic, Underline } from "lucide-react";
import styles from "./EmailEditor.module.scss";

export function EmailEditor() {
	return (
		<div>
			<h1>Email editor</h1>
			<div className={styles.card}>
				<div className={styles.editor}>
					Hey Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Accusamus beatae et quibusdam dolorum voluptas commodi,
					veritatis voluptate similique vero dignissimos laboriosam
					eos excepturi, reiciendis ipsum aperiam inventore provident
					mollitia modi?
				</div>
				<div className={styles.actions}>
					<div className={styles.tools}>
						<button>
							<Eraser size={18} />
						</button>
						<button>
							<Bold size={18} />
						</button>
						<button>
							<Italic size={18} />
						</button>
						<button>
							<Underline size={18} />
						</button>
					</div>
					<button>Send now</button>
				</div>
			</div>
		</div>
	);
}
