# LoggingFtpCompressionCodec

The codec used for compressing your logs. Valid values are `zstd`, `snappy`, and `gzip`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.


## Values

| Name     | Value    |
| -------- | -------- |
| `Zstd`   | zstd     |
| `Snappy` | snappy   |
| `Gzip`   | gzip     |