# GetInvoiceByIdResponse


## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `contentType`                                                        | *string*                                                             | :heavy_check_mark:                                                   | HTTP response content type for this operation                        |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP response status code for this operation                         |
| `rawResponse`                                                        | [AxiosResponse](https://axios-http.com/docs/res_schema)              | :heavy_minus_sign:                                                   | Raw HTTP response; suitable for custom response parsing              |
| `billingResponse`                                                    | [components.BillingResponse](../../models/shared/billingresponse.md) | :heavy_minus_sign:                                                   | OK                                                                   |
| `bytes`                                                              | *Uint8Array*                                                         | :heavy_minus_sign:                                                   | OK                                                                   |
| `res`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | OK                                                                   |