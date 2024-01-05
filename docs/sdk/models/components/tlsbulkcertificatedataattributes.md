# TlsBulkCertificateDataAttributes


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `allowUntrustedRoot`                                     | *boolean*                                                | :heavy_minus_sign:                                       | Allow certificates that chain to untrusted roots.        |
| `certBlob`                                               | *string*                                                 | :heavy_minus_sign:                                       | The PEM-formatted certificate blob. Required.            |
| `intermediatesBlob`                                      | *string*                                                 | :heavy_minus_sign:                                       | The PEM-formatted chain of intermediate blobs. Required. |