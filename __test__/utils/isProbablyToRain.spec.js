import { isProbablyToRain } from '@/utils';
import { describe, expect, test } from 'vitest';

describe('isProbablyToRain', () => {
	test('should return true', () => {
		expect(isProbablyToRain(61, 51)).toBe(true);
	});

	test('should return false', () => {
		expect(isProbablyToRain(50, 40)).toBe(false);
	});
});
