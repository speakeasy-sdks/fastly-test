# Condition


## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `comment`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | A freeform descriptive note.                                                        |                                                                                     |
| `name`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | Name of the condition. Required.                                                    | test-condition                                                                      |
| `priority`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | A numeric string. Priority determines execution order. Lower numbers execute first. | 10                                                                                  |
| `statement`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | A conditional expression in VCL used to determine if the condition is met.          |                                                                                     |
| `type`                                                                              | [shared.TypeT](../../models/shared/typet.md)                                        | :heavy_minus_sign:                                                                  | Type of the condition. Required.                                                    |                                                                                     |
| `version`                                                                           | *string*                                                                            | :heavy_minus_sign:                                                                  | A numeric string that represents the service version.                               |                                                                                     |