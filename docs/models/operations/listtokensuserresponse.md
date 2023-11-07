# ListTokensUserResponse


## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `contentType`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | HTTP response content type for this operation                            |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP response status code for this operation                             |
| `rawResponse`                                                            | [AxiosResponse](https://axios-http.com/docs/res_schema)                  | :heavy_minus_sign:                                                       | Raw HTTP response; suitable for custom response parsing                  |
| `classes`                                                                | [components.TokenResponse](../../models/shared/tokenresponse.md)[]       | :heavy_minus_sign:                                                       | OK                                                                       |
| `genericTokenError`                                                      | [components.GenericTokenError](../../models/shared/generictokenerror.md) | :heavy_minus_sign:                                                       | Missing or expired token.                                                |