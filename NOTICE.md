# NOTICE

## 设计语言与主题数据

`DESIGN.md`、`demo/` 里的一切视觉规格，以及 `tokens/*.json`，都来自
[openchamber/openchamber](https://github.com/openchamber/openchamber)，MIT License，版权归其作者。

| 本仓库文件 | 上游来源 |
|---|---|
| `DESIGN.md` | `.agents/skills/openchamber-ui-guidance/SKILL.md`（+ `references/surfaces.md`）、`.agents/skills/theme-system/SKILL.md`（+ `references/tokens-and-examples.md`、`references/icons.md`）、`.agents/skills/settings-ui-patterns/SKILL.md`、`.agents/skills/locale-ui-patterns/SKILL.md`、`.agents/skills/rtl-layout/SKILL.md` |
| `DESIGN.md` 附录 | `packages/ui/src/components/ui/{button-variants,dropdown-trigger,select,input,number-input}.ts{,x}`、`packages/ui/src/components/sections/shared/SettingsSection.tsx`、`packages/ui/src/styles/{design-system,typography}.css` |
| `tokens/*.json` | `packages/ui/src/lib/theme/themes/{openchamber,vercel}-{dark,light}.json`（原样复制） |
| `demo/` 的 token 块与组件样式 | `packages/ui/src/styles/design-system.css`、上述主题 JSON |

本仓库是**独立提取**，未经 openchamber 作者审阅或认可，不是官方文档。上游持续迭代，这里的值可能过时；
冲突时以上游源码为准。

## 字体

`demo/assets/fonts.css` 内嵌 Inter 与 Geist Mono 的 latin 子集（woff2，base64），取自 Google Fonts：

- **Inter** — SIL Open Font License 1.1，版权归 The Inter Project Authors。全文见 `licenses/OFL-1.1-Inter.txt`。
- **Geist Mono** — SIL Open Font License 1.1，版权归 Vercel。全文见 `licenses/OFL-1.1-Geist-Mono.txt`。

OFL 允许随产物再分发；保留许可原文即可，不得单独售卖字体本身。

## 格式

`DESIGN.md` 的结构（YAML frontmatter tokens + 散文理由）参考
[google-labs-code/design.md](https://github.com/google-labs-code/design.md)。
