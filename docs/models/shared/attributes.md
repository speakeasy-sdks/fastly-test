# Attributes


## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `modsecRuleId`                                                                        | *number*                                                                              | :heavy_minus_sign:                                                                    | The ModSecurity rule ID of the associated rule revision.                              |
| `revision`                                                                            | *any*                                                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `status`                                                                              | [components.BulkWafActiveRuleStatus](../../models/shared/bulkwafactiverulestatus.md)  | :heavy_minus_sign:                                                                    | Describes the behavior for the particular rule revision within this firewall version. |