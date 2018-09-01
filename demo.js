const Md = require('markdown-it')
const tl = require('./')

const assert = require('assert')

const md = Md({
    html: true
}).use(ts)

const res = md.render(`
<script>
var __md_tl_scope = {
    variables: [1,2,3].map(_ => Math.random()),
    replaced: 'rrrrreplaced',
}
</script>

# This is
some markdown with \${variables} that
can be \${replaced}.`)

console.log(res)