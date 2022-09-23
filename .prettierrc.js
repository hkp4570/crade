module.exports = {
    tabWidth: 4, // 缩进4个字符
    printWidth: 120, // 超过多少换行
    singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
    semi: true, // 行位是否使用分号，默认为true
    trailingComma: 'all', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
    arrowParens: 'avoid', // x => x 在唯一的箭头函数参数周围包含括号 "<always|avoid>"
    jsxBracketSameLine: true, // 将多行 JSX 元素的 > 放在最后一行的末尾，而不是单独放在下一行
    requirePragma: false, // 顶部注释
    bracketSpacing: false, // 对象中的空格 默认true
    htmlWhitespaceSensitivity: 'ignore', // 指定 HTML、Vue、Angular 和 Handlebars 的全局空格敏感性
    bracketSameLine: false, // 将多行 HTML（HTML、JSX、Vue、Angular）元素的 > 放在最后一行的末尾，而不是单独放在下一行
};
