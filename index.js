// <script>.*</script>
const script_pattern = /^<script>([^<]+)<\/script>/m

//                $ { not} }
const template_string_pattern = /\$\{[^}]+}/;
const global_template_string_pattern = /\$\{([^}]+)}/g;

module.exports = function (md) {
    md.core.ruler.push('template-literals', template_literals)
}

function template_literals(state) {
    for (let token of state.tokens) {
        if (token.type === 'html_block') {
            let script_content = token.content.match(script_pattern)
            if (script_content === null) {
                continue
            }
            eval(script_content[1])
            continue
        }
        if (!token.children) {
            continue
        }
        for (let index = 0; index < token.children.length; index++) {
            const inline_token = token.children[index]
            if (inline_token.type !== 'text') {
                continue
            }
            if (inline_token.content.match(template_string_pattern) === null) {
                continue
            }
            inline_token.content = inline_token.content.replace(
                global_template_string_pattern,
                '${__md_tl_scope.$1}'
            )
            inline_token.content = eval('`' + inline_token.content + '`')
        }
    }
}