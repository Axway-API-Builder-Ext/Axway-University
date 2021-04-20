var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('furniture', {
    "description": "Furniture Inventory",
    "connector": "mbs",
    "fields": {
        "name": {
            "type": "string"
        },
        "price": {
            "type": "string"
        },
        "count": {
            "type": "number"
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