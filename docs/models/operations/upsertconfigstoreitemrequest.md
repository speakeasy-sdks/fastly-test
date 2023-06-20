# UpsertConfigStoreItemRequest


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `configStoreId`                                                  | *string*                                                         | :heavy_check_mark:                                               | An alphanumeric string identifying the config store.             | 7Lsb7Y76rChV9hSrv3KgFl                                           |
| `configStoreItem`                                                | [shared.ConfigStoreItem](../../models/shared/configstoreitem.md) | :heavy_minus_sign:                                               | N/A                                                              |                                                                  |
| `configStoreItemKey`                                             | *string*                                                         | :heavy_check_mark:                                               | Item key, maximum 256 characters.                                | test-key                                                         |