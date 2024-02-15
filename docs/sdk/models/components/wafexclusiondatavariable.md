# WafExclusionDataVariable

The variable to exclude. An optional selector can be specified after the variable separated by a colon (`:`) to restrict the variable to a particular parameter. Required for `exclusion_type=variable`.


## Values

| Name              | Value             |
| ----------------- | ----------------- |
| `ReqCookies`      | req.cookies       |
| `ReqHeaders`      | req.headers       |
| `ReqPost`         | req.post          |
| `ReqPostFilename` | req.post_filename |
| `ReqQs`           | req.qs            |