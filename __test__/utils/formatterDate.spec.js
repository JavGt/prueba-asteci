import { formatterDate } from '@/utils';
import { describe, expect, test } from 'vitest';

describe('formatterDate', () => {
	test('should return formatted date', () => {
		expect(formatterDate('20170627T092449Z')).toBe('2017/06/27');
	});
});
