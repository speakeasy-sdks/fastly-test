# CreateWafRuleExclusionRequest


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `firewallId`                                               | *string*                                                   | :heavy_check_mark:                                         | Alphanumeric string identifying a WAF Firewall.            | fW7g2uUGZzb2W9Euo4Mo0r                                     |
| `firewallVersionNumber`                                    | *number*                                                   | :heavy_check_mark:                                         | Integer identifying a WAF firewall version.                | 1                                                          |
| `wafExclusion`                                             | [shared.WafExclusion](../../models/shared/wafexclusion.md) | :heavy_minus_sign:                                         | N/A                                                        |                                                            |