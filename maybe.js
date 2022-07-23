curl - X;
POST;
'https://api.notion.com/v1/databases/33f400d010e84b47be4de28b76267412/query';
-H;
'Authorization: Bearer ';
"$secret_hYnqvSqUIDkcysrWv4cF0jwsWioTPkMvPByN035pacO";
'';
-H;
'Notion-Version: 2022-06-28';
-H;
"Content-Type: application/json";
--data;
'{;
"filter";
{
    "or";
    [
        {
            "property": "In stock",
            "checkbox": {
                "equals": true
            }
        },
        {
            "property": "Cost of next trip",
            "number": {
                "greater_than_or_equal_to": 2
            }
        }
    ];
}
"sorts";
[
    {
        "property": "Last ordered",
        "direction": "ascending"
    }
];
';
