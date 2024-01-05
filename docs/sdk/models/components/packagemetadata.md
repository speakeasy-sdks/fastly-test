# PackageMetadata

[Package metadata](#metadata-model) that has been extracted from the uploaded package.



## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `authors`                                          | *string*[]                                         | :heavy_minus_sign:                                 | A list of package authors' email addresses.        |                                                    |
| `description`                                      | *string*                                           | :heavy_minus_sign:                                 | Description of the Compute@Edge package.           |                                                    |
| `filesHash`                                        | *string*                                           | :heavy_minus_sign:                                 | Hash of the files within the Compute@Edge package. |                                                    |
| `hashsum`                                          | *string*                                           | :heavy_minus_sign:                                 | Hash of the Compute@Edge package.                  |                                                    |
| `language`                                         | *string*                                           | :heavy_minus_sign:                                 | The language of the Compute@Edge package.          | rust                                               |
| `name`                                             | *string*                                           | :heavy_minus_sign:                                 | Name of the Compute@Edge package.                  |                                                    |
| `size`                                             | *number*                                           | :heavy_minus_sign:                                 | Size of the Compute@Edge package in bytes.         |                                                    |