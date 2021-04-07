var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('customerdetail', {
    "description": "This is a detailed look at a customer",
    "connector": "composite",
    "fields": {
        "first_name": {
            "type": "string",
            "description": "This is the first name of the customer",
            "model": "customer",
            "name": "first_name"
        },
        "last_name": {
            "type": "string",
            "description": "This is the last name of the customer",
            "model": "customer",
            "name": "last_name"
        },
        "company_name": {
            "type": "string",
            "description": "This is the name of the company the customer works for.",
            "model": "customer",
            "name": "company_name"
        },
        "company": {
            "model": "company",
            "type": "array"
        }
    },
    "actions": [
        "read"
    ],
    "metadata": {
        "primarykey": "id",
        "primaryKeyDetails": {
            "autogenerated": true
        },
        "inner_join": [
            {
                "model": "company",
                "join_properties": {
                    "company_name": "company_name"
                }
            }
        ]
    }
});
module.exports = Model;