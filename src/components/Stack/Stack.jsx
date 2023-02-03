import styles from './Stack.module.scss';
import { clsx } from 'clsx';

const Stack = ({ children, gap, justifyContent, alignItems, direction }) => {
	return (
		<div
			style={{
				'--gap': gap,
				'--justify-content': justifyContent,
				'--align-items': alignItems,
				'--direction': direction,
			}}
			className={clsx(styles.stack)}
		>
			{children}
		</div>
	);
};

Stack.defaultProps = {
	gap: '1rem',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	direction: 'column',
};

export default Stack;
