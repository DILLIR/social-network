import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({ test: 'value' });
        expect(params).toEqual('?test=value');
    });
    test('test with two params', () => {
        const params = getQueryParams({ test: 'value', value: '2' });
        expect(params).toEqual('?test=value&value=2');
    });
    test('test with undefined param', () => {
        const params = getQueryParams({ test: 'value', test2: undefined });
        expect(params).toEqual('?test=value');
    });
});
