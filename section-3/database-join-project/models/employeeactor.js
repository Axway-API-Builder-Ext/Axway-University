var APIBuilder = require('@axway/api-builder-runtime');
var Model = APIBuilder.createModel('employeeactor', {
    "connector": "composite",
    "fields": {
        "birth_date": {
            "type": "date",
            "model": "mysql_aws/employees",
            "name": "birth_date"
        },
        "first_name": {
            "type": "string",
            "model": "mysql_aws/employees",
            "name": "first_name"
        },
        "last_name": {
            "type": "string",
            "model": "mysql_aws/employees",
            "name": "last_name"
        },
        "gender": {
            "type": "string",
            "model": "mysql_aws/employees",
            "name": "gender"
        },
        "hire_date": {
            "type": "date",
            "model": "mysql_aws/employees",
            "name": "hire_date"
        },
        "mysql_local/actor": {
            "model": "mysql_local/actor",
            "type": "array"
        }
    },
    "actions": [
        "read"
    ],
    "metadata": {
        "primarykey": "emp_no",
        "primaryKeyDetails": {
            "autogenerated": false,
            "type": "number"
        },
        "inner_join": [
            {
                "model": "mysql_local/actor",
                "join_properties": {
                    "first_name": "first_name"
                }
            }
        ]
    }
});
module.exports = Model;