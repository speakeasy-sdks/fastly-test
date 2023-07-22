# GetWafFirewallRequest


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `filterServiceVersionNumber`                                     | *string*                                                         | :heavy_minus_sign:                                               | Limit the results returned to a specific service version.        |                                                                  |
| `firewallId`                                                     | *string*                                                         | :heavy_check_mark:                                               | Alphanumeric string identifying a WAF Firewall.                  | fW7g2uUGZzb2W9Euo4Mo0r                                           |
| `include`                                                        | [shared.FirewallInclude](../../models/shared/firewallinclude.md) | :heavy_minus_sign:                                               | Include related objects. Optional.                               |                                                                  |