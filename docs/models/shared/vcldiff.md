# VclDiff

OK


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `diff`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The differences between two specified versions.                                               |
| `format`                                                                                      | [VclDiffFormat](../../models/shared/vcldiffformat.md)                                         | :heavy_minus_sign:                                                                            | The format in which compared VCL changes are being returned in.                               |
| `from`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | The version number of the service to which changes in the generated VCL are being compared.   |
| `to`                                                                                          | *number*                                                                                      | :heavy_minus_sign:                                                                            | The version number of the service from which changes in the generated VCL are being compared. |