import { Outlet, useNavigation } from 'react-router-dom';
import styles from './LoaderPage.module.scss';
import { clsx } from 'clsx';

const LoaderPage = () => {
	const location = useNavigation();

	const isLoading = location.state === 'loading';

	return (
		<div>
			<div className={clsx(styles.loader, isLoading && styles.loader__active)}>
				Cargando
			</div>
			<Outlet />
		</div>
	);
};

export default LoaderPage;
