# UpdateWafActiveRuleRequest


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `firewallId`                                                 | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF Firewall.              | fW7g2uUGZzb2W9Euo4Mo0r                                       |
| `versionId`                                                  | *number*                                                     | :heavy_check_mark:                                           | Integer identifying a service version.                       | 1                                                            |
| `wafActiveRule`                                              | [shared.WafActiveRule](../../models/shared/wafactiverule.md) | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `wafRuleId`                                                  | *string*                                                     | :heavy_check_mark:                                           | Alphanumeric string identifying a WAF rule.                  | 3krg2uUGZzb2W9Euo4moOR                                       |