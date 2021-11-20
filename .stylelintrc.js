module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-rational-order",
  ],
  plugins: [
    "stylelint-order",
    "stylelint-declaration-block-no-ignored-properties",
  ],
  rules: {
    "selector-no-qualifying-type": null, // &.collapsed会报错，要关掉
    "string-quotes": null, // 必须使用单引号，和webstorm save时自动格式化有冲突
    "declaration-colon-newline-after": null, // 多属性必须新起一行，和webstorm save时自动格式化有冲突
    "order/properties-alphabetical-order": null, // 顺序提示有问题，使用默认的lint:style
    "max-nesting-depth": 8, // 最大嵌套层数
    "selector-max-compound-selectors": 8, // 选择器最大嵌套层数
    "function-parentheses-space-inside": null, // 和material自定义样式冲突
    "no-invalid-position-at-import-rule": null, // 和material自定义样式冲突
    "scss/at-extend-no-missing-placeholder": null, // @extend后要加%，和angular冲突
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["ng-deep"], // ::ng-deep报错
      },
    ],
  },
};
