# ServiceListResponse


## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `comment`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | A freeform descriptive note.                                                                    |                                                                                                 |
| `createdAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | Date and time in ISO 8601 format.                                                               | 2020-04-09 18:14:30 +0000 UTC                                                                   |
| `customerId`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | Alphanumeric string identifying the customer.                                                   | x4xCwxxJxGCx123Rx5xTx                                                                           |
| `deletedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | Date and time in ISO 8601 format.                                                               | 2020-04-09 18:14:30 +0000 UTC                                                                   |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             | SU1Z0isxPaozGVKXdv0eY                                                                           |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | The name of the service.                                                                        | test-service                                                                                    |
| `type`                                                                                          | [components.ServiceListResponseType](../../../sdk/models/components/servicelistresponsetype.md) | :heavy_minus_sign:                                                                              | The type of this service.                                                                       |                                                                                                 |
| `updatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)   | :heavy_minus_sign:                                                                              | Date and time in ISO 8601 format.                                                               | 2020-04-09 18:14:30 +0000 UTC                                                                   |
| `version`                                                                                       | *number*                                                                                        | :heavy_minus_sign:                                                                              | Current [version](/reference/api/services/version/) of the service.                             |                                                                                                 |
| `versions`                                                                                      | [components.SchemasVersionResponse](../../../sdk/models/components/schemasversionresponse.md)[] | :heavy_minus_sign:                                                                              | A list of [versions](/reference/api/services/version/) associated with the service.             |                                                                                                 |