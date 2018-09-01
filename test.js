const Md = require('markdown-it')
const tl = require('./')

const assert = require('assert')

const md = Md({
    html: true
}).use(tl)

const res = md.render(`
<script>
var __md_tl_scope = {
    variables: 'a,b,c',
    replaced: 'rrrrreplaced',
}
</script>

# This is
some markdown with \${variables} that
can be \${replaced}.`)

const expected = `<script>
var __md_tl_scope = {
    variables: 'a,b,c',
    replaced: 'rrrrreplaced',
}
</script>
<h1>This is</h1>
<p>some markdown with a,b,c that
can be rrrrreplaced.</p>
`

assert.equal(res, expected)
