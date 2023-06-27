# ListWafTagsRequest


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `filterName`                                                 | *string*                                                     | :heavy_minus_sign:                                           | Limit the returned tags to a specific name.                  |                                                              |
| `include`                                                    | [shared.WafTagInclude](../../models/shared/waftaginclude.md) | :heavy_minus_sign:                                           | Include relationships. Optional.                             | waf_rules                                                    |
| `pageNumber`                                                 | *number*                                                     | :heavy_minus_sign:                                           | Current page.                                                | 1                                                            |
| `pageSize`                                                   | *number*                                                     | :heavy_minus_sign:                                           | Number of records per page.                                  | 20                                                           |