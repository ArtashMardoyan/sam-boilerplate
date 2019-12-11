'use strict';

const lambda = require('../../../handlers/UserHandler');

describe('User handler function check', () => {
    it('Should return list of the user object ', async () => {
        const event = require('../../../events/User/actionIndex');
        const items = { actionIndex: 'actionIndex' };

        const result = await lambda.actionIndex(event);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify(items)
        };

        expect(result).toEqual(expectedResult);
    });

    it('Should return the user object ', async () => {
        const event = require('../../../events/User/actionView');
        const items = { actionView: 'actionView' };

        const result = await lambda.actionView(event);

        const expectedResult = {
            statusCode: 200,
            body: JSON.stringify(items)
        };

        expect(result).toEqual(expectedResult);
    });
});
