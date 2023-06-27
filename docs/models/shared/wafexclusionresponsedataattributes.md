# WafExclusionResponseDataAttributes


## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              | Example                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `condition`                                                                                                                                                                                              | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | A conditional expression in VCL used to determine if the condition is met.                                                                                                                               |                                                                                                                                                                                                          |
| `createdAt`                                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Date and time in ISO 8601 format.                                                                                                                                                                        | 2020-04-09T18:14:30Z                                                                                                                                                                                     |
| `deletedAt`                                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Date and time in ISO 8601 format.                                                                                                                                                                        | 2020-04-09T18:14:30Z                                                                                                                                                                                     |
| `exclusionType`                                                                                                                                                                                          | [WafExclusionResponseDataAttributesExclusionType](../../models/shared/wafexclusionresponsedataattributesexclusiontype.md)                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | The type of exclusion.                                                                                                                                                                                   |                                                                                                                                                                                                          |
| `logging`                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                       | Whether to generate a log upon matching.                                                                                                                                                                 |                                                                                                                                                                                                          |
| `name`                                                                                                                                                                                                   | *string*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | Name of the exclusion.                                                                                                                                                                                   |                                                                                                                                                                                                          |
| `number`                                                                                                                                                                                                 | *number*                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                       | A numeric ID identifying a WAF exclusion.                                                                                                                                                                | 1                                                                                                                                                                                                        |
| `updatedAt`                                                                                                                                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Date and time in ISO 8601 format.                                                                                                                                                                        | 2020-04-09T18:14:30Z                                                                                                                                                                                     |
| `variable`                                                                                                                                                                                               | [WafExclusionResponseDataAttributesVariable](../../models/shared/wafexclusionresponsedataattributesvariable.md)                                                                                          | :heavy_minus_sign:                                                                                                                                                                                       | The variable to exclude. An optional selector can be specified after the variable separated by a colon (`:`) to restrict the variable to a particular parameter. Required for `exclusion_type=variable`. |                                                                                                                                                                                                          |