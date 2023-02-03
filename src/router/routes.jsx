import { PATHS } from '@/constants/paths.constants';
import { loaderDetails, loaderHome } from '@/loaders';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const LoaderPage = lazy(() => import('@/components/LoaderPage/LoaderPage'));
const Home = lazy(() => import('@/pages/Home/Home.page'));
const Details = lazy(() => import('@/pages/Details/Details.page'));

export const routes = createBrowserRouter([
	{
		path: PATHS.HOME,
		element: <LoaderPage />,
		children: [
			{
				index: true,
				element: <Home />,
				loader: loaderHome,
			},
			{
				path: PATHS.DETAILS,
				element: <Details />,
				loader: loaderDetails,
			},
		],
	},
]);
