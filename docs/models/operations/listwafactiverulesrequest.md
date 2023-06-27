# ListWafActiveRulesRequest


## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `filterOutdated`                                                                                                            | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Limit results to active rules referencing an outdated rule revision.                                                        |                                                                                                                             |
| `filterStatus`                                                                                                              | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Limit results to active rules with the specified status.                                                                    |                                                                                                                             |
| `filterWafRuleRevisionMessage`                                                                                              | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Limit results to active rules with the specified message.                                                                   |                                                                                                                             |
| `filterWafRuleRevisionModsecRuleId`                                                                                         | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Limit results to active rules that represent the specified ModSecurity modsec_rule_id.                                      |                                                                                                                             |
| `firewallId`                                                                                                                | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Alphanumeric string identifying a WAF Firewall.                                                                             | fW7g2uUGZzb2W9Euo4Mo0r                                                                                                      |
| `include`                                                                                                                   | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Include relationships. Optional, comma-separated values. Permitted values: `waf_rule_revision` and `waf_firewall_version`.<br/> | waf_rule_revision,waf_firewall_version                                                                                      |
| `pageNumber`                                                                                                                | *number*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Current page.                                                                                                               | 1                                                                                                                           |
| `pageSize`                                                                                                                  | *number*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Number of records per page.                                                                                                 | 20                                                                                                                          |
| `versionId`                                                                                                                 | *number*                                                                                                                    | :heavy_check_mark:                                                                                                          | Integer identifying a service version.                                                                                      | 1                                                                                                                           |