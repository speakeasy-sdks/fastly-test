# CreateTlsSubRequest


## Fields

| Field                                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `force`                                                                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | A flag that allows you to edit and delete a subscription with active domains. Valid to use on PATCH and DELETE actions. As a warning, removing an active domain from a subscription or forcing the deletion of a subscription may result in breaking TLS termination to that domain.<br/> | true                                                                                                                                                                                                                                                                                  |
| `tlsSubscription`                                                                                                                                                                                                                                                                     | [components.TlsSubscription](../../../sdk/models/components/tlssubscription.md)                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                       |