# HistoricalRegionsResponse

OK


## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | *string*[]                                                                            | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `meta`                                                                                | [HistoricalRegionsResponseMeta](../../models/shared/historicalregionsresponsemeta.md) | :heavy_minus_sign:                                                                    | Meta information about the scope of the query in a human readable format.             |
| `msg`                                                                                 | *string*                                                                              | :heavy_minus_sign:                                                                    | If the query was not successful, this will provide a string that explains why.        |
| `status`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | Whether or not we were able to successfully execute the query.                        |