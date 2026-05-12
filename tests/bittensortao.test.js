// tests/bittensortao.test.js
/**
 * Tests for BittensorTAO module
 */

const { BittensorTAO } = require('../src/bittensortao');

describe('BittensorTAO', () => {
    let instance;

    beforeEach(() => {
        instance = new BittensorTAO({ verbose: false });
    });

    test('should create instance with default config', () => {
        expect(instance).toBeDefined();
        expect(instance.timeout).toBe(30000);
        expect(instance.maxRetries).toBe(3);
    });

    test('should execute successfully', async () => {
        const result = await instance.execute();
        expect(result.success).toBe(true);
        expect(result.message).toBeTruthy();
    });

    test('should process data', async () => {
        const result = await instance.process();
        expect(result.processed).toBe(true);
    });
});
