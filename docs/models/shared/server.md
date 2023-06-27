# Server


## Fields

| Field                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      | Example                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | A hostname, IPv4, or IPv6 address for the server. Required.                                                                                                                                                                      |                                                                                                                                                                                                                                  |
| `comment`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | A freeform descriptive note.                                                                                                                                                                                                     |                                                                                                                                                                                                                                  |
| `disabled`                                                                                                                                                                                                                       | *boolean*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                               | Allows servers to be enabled and disabled in a pool.                                                                                                                                                                             |                                                                                                                                                                                                                                  |
| `maxConn`                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | Maximum number of connections. If the value is `0`, it inherits the value from pool's `max_conn_default`.                                                                                                                        |                                                                                                                                                                                                                                  |
| `overrideHost`                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | The hostname to override the Host header. Defaults to `null` meaning no override of the Host header if not set. This setting can also be added to a Pool definition. However, the server setting will override the Pool setting. |                                                                                                                                                                                                                                  |
| `port`                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | Port number. Setting port `443` does not force TLS. Set `use_tls` in pool to force TLS.                                                                                                                                          |                                                                                                                                                                                                                                  |
| `weight`                                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | Weight (`1-100`) used to load balance this server against others.                                                                                                                                                                |                                                                                                                                                                                                                                  |