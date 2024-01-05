# WsMessageFormat

Payload format for delivering to subscribers of WebSocket messages. One of `content` or `content-bin` must be specified.


## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `content`                                                   | *string*                                                    | :heavy_minus_sign:                                          | The content of a WebSocket `TEXT` message.                  |
| `contentBin`                                                | *string*                                                    | :heavy_minus_sign:                                          | The base64-encoded content of a WebSocket `BINARY` message. |