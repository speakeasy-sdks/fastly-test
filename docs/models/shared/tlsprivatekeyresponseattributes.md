# TlsPrivateKeyResponseAttributes


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date and time in ISO 8601 format.                                                             | 2020-04-09T18:14:30Z                                                                          |
| `deletedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date and time in ISO 8601 format.                                                             | 2020-04-09T18:14:30Z                                                                          |
| `keyLength`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | The key length used to generate the private key.                                              |                                                                                               |
| `keyType`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | The algorithm used to generate the private key. Must be `RSA`.                                |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | A customizable name for your private key.                                                     |                                                                                               |
| `publicKeySha1`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Useful for safely identifying the key.                                                        |                                                                                               |
| `replace`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | A recommendation from Fastly to replace this private key and all associated certificates.     |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Date and time in ISO 8601 format.                                                             | 2020-04-09T18:14:30Z                                                                          |