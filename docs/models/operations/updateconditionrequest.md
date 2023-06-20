# UpdateConditionRequest


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `conditionInput`                                               | [shared.ConditionInput](../../models/shared/conditioninput.md) | :heavy_minus_sign:                                             | N/A                                                            |                                                                |
| `conditionName`                                                | *string*                                                       | :heavy_check_mark:                                             | Name of the condition. Required.                               | test-condition                                                 |
| `serviceId`                                                    | *string*                                                       | :heavy_check_mark:                                             | Alphanumeric string identifying the service.                   | SU1Z0isxPaozGVKXdv0eY                                          |
| `versionId`                                                    | *number*                                                       | :heavy_check_mark:                                             | Integer identifying a service version.                         | 1                                                              |