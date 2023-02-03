import { RouterProvider } from 'react-router-dom';
import { routes } from '@/router';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { stores } from '@/redux/config';

const App = () => {
	return (
		<Provider store={stores}>
			<Suspense>
				<RouterProvider router={routes} />
			</Suspense>
		</Provider>
	);
};

export default App;
