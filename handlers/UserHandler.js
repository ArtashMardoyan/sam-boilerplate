'use strict';

class UserHandler {
    static async actionView(event) {
        const { id } = event.pathParameters;

        console.log(id);

        return {
            statusCode: 200,
            body: JSON.stringify({ actionView: 'actionView' })
        };
    }

    static async actionIndex(event) {
        const { page, limit } = event.queryStringParameters;

        console.log(`page:${page}, limit:${limit}`);

        return {
            statusCode: 200,
            body: JSON.stringify({ actionIndex: 'actionIndex' })
        };
    }
}

module.exports = UserHandler;
