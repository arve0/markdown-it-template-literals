# markdown-it-template-literals

markdown-it-template-literals lets you put ${variables} in your markdown, similar as
[JS template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

For example, take this input:

```md
<script>
// define variables here under __md_tl_scope, use var (do not use let or const)
var __md_tl_scope = {
    variables: [1,2,3].map(_ => Math.random()),
    replaced: 'rrrrreplaced',
}
</script>

# This is
some markdown with \${variables} that
can be \${replaced}.
</script>
```

Results in:

```html
<script>
var __md_tl_scope = {
    variables: [1,2,3].map(_ => Math.random()),
    replaced: 'rrrrreplaced',
}
</script>
<h1>This is</h1>
<p>some markdown with 0.5828191413301298,0.043310291215606256,0.9787475428111776 that
can be rrrrreplaced.</p>
```

## Security
This package uses evil eval, be aware of injection attacks!

## License
MIT © Arve Seljebu