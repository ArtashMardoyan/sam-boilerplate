'use strict';

const lambda = require('../../../handlers/UserHandler');

describe('User handler function check', () => {
    it('Should return list of the user object ', async () => {
        const items = { actionIndex: 'actionIndex' };

        const event = { httpMethod: 'GET' };

        const result = await lambda.actionIndex(event);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify(items)
        };

        expect(result).toEqual(expectedResult);
    });

    it('Should return the user object ', async () => {
        const items = { actionView: 'actionView' };

        const event = { httpMethod: 'GET' };

        const result = await lambda.actionView(event);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify(items)
        };

        expect(result).toEqual(expectedResult);
    });
});
