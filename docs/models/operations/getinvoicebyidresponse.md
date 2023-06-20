# GetInvoiceByIdResponse


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `contentType`                                                    | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `statusCode`                                                     | *number*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `rawResponse`                                                    | [AxiosResponse>](https://axios-http.com/docs/res_schema)         | :heavy_minus_sign:                                               | N/A                                                              |
| `billingResponse`                                                | [shared.BillingResponse](../../models/shared/billingresponse.md) | :heavy_minus_sign:                                               | OK                                                               |
| `getInvoiceById200ApplicationPdfBinaryString`                    | *Uint8Array*                                                     | :heavy_minus_sign:                                               | OK                                                               |
| `getInvoiceById200TextCsvCsvString`                              | *string*                                                         | :heavy_minus_sign:                                               | OK                                                               |