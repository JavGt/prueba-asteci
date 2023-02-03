import { instance } from '@/axios';
import { SLICE } from '@/constants';
import { stores } from '@/redux/config';
import { setTable } from '@/redux/slices/table.slice';

export const loaderHome = async ({ params }) => {
	const limit = params.limit || 10;

	const cache = stores.getState()[SLICE.TABLE];

	const isExist = cache.length === limit;

	if (isExist) return { results: cache };

	const data = await instance.get(`?pageSize=${limit}`);

	const {
		data: { results },
	} = data;

	stores.dispatch(setTable(results));

	return { results };
};
