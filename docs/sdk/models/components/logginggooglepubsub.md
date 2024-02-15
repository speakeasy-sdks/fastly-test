# LoggingGooglePubsub


## Fields

| Field                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                | Example                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountName`                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The name of the Google Cloud Platform service account associated with the target log collection service. Not required if `user` and `secret_key` are provided.                                                             | test-user@test-project-id.iam.gserviceaccount.com                                                                                                                                                                          |
| `format`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).                                                                                                                                        | %h %l %u %t "%r" %&gt;s %b                                                                                                                                                                                                 |
| `formatVersion`                                                                                                                                                                                                            | [components.LoggingGooglePubsubFormatVersion](../../../sdk/models/components/logginggooglepubsubformatversion.md)                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                         | The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.<br/> | 2                                                                                                                                                                                                                          |
| `name`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The name for the real-time logging configuration.                                                                                                                                                                          | test-log-endpoint                                                                                                                                                                                                          |
| `placement`                                                                                                                                                                                                                | [components.LoggingGooglePubsubPlacement](../../../sdk/models/components/logginggooglepubsubplacement.md)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                         | Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`.<br/>              | <nil>                                                                                                                                                                                                                      |
| `projectId`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | Your Google Cloud Platform project ID. Required                                                                                                                                                                            | test-project-id                                                                                                                                                                                                            |
| `responseCondition`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The name of an existing condition in the configured endpoint, or leave blank to always execute.                                                                                                                            | <nil>                                                                                                                                                                                                                      |
| `secretKey`                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Not required if `account_name` is specified.                                                           | -----BEGIN PRIVATE KEY-----<br/>...<br/>-----END PRIVATE KEY-----<br/>                                                                                                                                                     |
| `topic`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | The Google Cloud Pub/Sub topic to which logs will be published. Required.                                                                                                                                                  |                                                                                                                                                                                                                            |
| `user`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                         | Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Not required if `account_name` is specified.                                               | test-user@test-project-id.iam.gserviceaccount.com                                                                                                                                                                          |