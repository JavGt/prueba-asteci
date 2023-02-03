import { instance } from '@/axios';
import { SLICE } from '@/constants';
import { stores } from '@/redux/config';
import { setCities } from '@/redux/slices/cities.slice';

export const loaderDetails = async ({ params }) => {
	const { id } = params;

	const cache = stores.getState()[SLICE.CITY];

	const isExist = cache.find(item => item._id === id);

	if (isExist) return { results: isExist };

	const data = await instance.get(`?_id=${id}`);

	const {
		data: { results },
	} = data;

	stores.dispatch(setCities(results));

	return { results: results[0] };
};
