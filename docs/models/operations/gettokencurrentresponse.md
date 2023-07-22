# GetTokenCurrentResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `rawResponse`                                                        | [AxiosResponse>](https://axios-http.com/docs/res_schema)             | :heavy_minus_sign:                                                   | N/A                                                                  |
| `genericTokenError`                                                  | [shared.GenericTokenError](../../models/shared/generictokenerror.md) | :heavy_minus_sign:                                                   | Missing or expired token.                                            |
| `tokenResponse`                                                      | [shared.TokenResponse](../../models/shared/tokenresponse.md)         | :heavy_minus_sign:                                                   | OK                                                                   |