import { FortyTwoCLI } from './forty-two-cli';

describe('forty-two cli', () => {
	it('should return 42 from the CLI wrapper', () => {
		expect(FortyTwoCLI.magic()).toBe(42);
	});
});