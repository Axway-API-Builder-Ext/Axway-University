var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('customer', {
    "description": "This is the vital details of each customer",
    "connector": "memory",
    "fields": {
        "first_name": {
            "type": "string",
            "description": "This is the first name of the customer"
        },
        "last_name": {
            "type": "string",
            "description": "This is the last name of the customer"
        },
        "company_name": {
            "type": "string",
            "description": "This is the name of the company the customer works for."
        }
    },
    "actions": [
        "create",
        "read",
        "update",
        "delete",
        "deleteAll"
    ]
});
module.exports = Model;