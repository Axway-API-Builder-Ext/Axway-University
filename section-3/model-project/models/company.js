var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('company', {
    "description": "These are companies for which our customers work",
    "connector": "memory",
    "fields": {
        "company_name": {
            "type": "string"
        },
        "company_size": {
            "type": "number",
            "description": "The amount of employees in the company"
        },
        "city": {
            "type": "string",
            "description": "The city with the company's HQ"
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