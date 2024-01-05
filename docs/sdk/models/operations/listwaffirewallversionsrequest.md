# ListWafFirewallVersionsRequest


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `firewallId`                                    | *string*                                        | :heavy_check_mark:                              | Alphanumeric string identifying a WAF Firewall. | fW7g2uUGZzb2W9Euo4Mo0r                          |
| `include`                                       | *string*                                        | :heavy_minus_sign:                              | Include relationships. Optional.                | waf_firewall                                    |
| `pageNumber`                                    | *number*                                        | :heavy_minus_sign:                              | Current page.                                   | 1                                               |
| `pageSize`                                      | *number*                                        | :heavy_minus_sign:                              | Number of records per page.                     | 20                                              |