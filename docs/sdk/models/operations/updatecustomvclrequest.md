# UpdateCustomVclRequest


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `serviceId`                                             | *string*                                                | :heavy_check_mark:                                      | Alphanumeric string identifying the service.            | SU1Z0isxPaozGVKXdv0eY                                   |
| `vcl`                                                   | [components.Vcl](../../../sdk/models/components/vcl.md) | :heavy_minus_sign:                                      | N/A                                                     |                                                         |
| `vclName`                                               | *string*                                                | :heavy_check_mark:                                      | The name of this VCL.                                   | test-vcl                                                |
| `versionId`                                             | *number*                                                | :heavy_check_mark:                                      | Integer identifying a service version.                  | 1                                                       |