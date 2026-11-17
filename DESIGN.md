---
name: OpenChamber Design System
source: openchamber/openchamber @ main (packages/ui/src) — 从仓库自身的 agent skills + 样式源码提取，非官方文件
colors:
  surface-background: "#120f0e"
  surface-foreground: "#ebe7dc"
  surface-muted: "#0e0c0b"
  surface-muted-foreground: "#9a978d"
  surface-elevated: "#1b1918"
  surface-subtle: "#171616"
  primary: "#da7c47"
  primary-hover: "#eb8c57"
  primary-active: "#fd9b66"
  border: "#242323bf"
  border-hover: "#504e4c"
  hover: "#ffffff0f"
  active: "#ffffff1a"
  selection: "#c8c6c52b"
  focus-ring: "#da7c4755"
  status-error: "#da5b4a"
  status-warning: "#c67f13"
  status-success: "#76ad4f"
  status-info: "#479fe6"
  syntax-background: "#100e0d"
  syntax-comment: "#7d917d"
  syntax-keyword: "#34983a"
  syntax-string: "#d58373"
  syntax-number: "#279e93"
  syntax-function: "#78a952"
  syntax-type: "#479cb1"
  diff-added: "#4d934e"
  diff-removed: "#e0605c"
  pr-open: "#93a233"
  pr-merged: "#9988e5"
  user-message-background: "#2d1c12"
  markdown-link: "#5d99a9"
  markdown-inline-code: "#99b985"
colors-light:
  surface-background: "#fdfcfa"
  surface-foreground: "#262521"
  surface-muted: "#f7f6f4"
  surface-muted-foreground: "#696960"
  surface-elevated: "#f3f2f0"
  primary: "#b35017"
  primary-hover: "#9a4310"
  border: "#e5e1debf"
  hover: "#0000000a"
  selection: "#26252120"
  status-error: "#b7493f"
  status-warning: "#886914"
  status-success: "#517734"
  status-info: "#2c6ebd"
  user-message-background: "#f3e9e3"
  markdown-link: "#2d7d8c"
  markdown-inline-code: "#32613c"
typography:
  font-sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
  font-mono: 'ui-monospace, "SFMono-Regular", "Menlo", "Cascadia Mono", "Segoe UI Mono", monospace'
  markdown-body: { fontSize: 14px, lineHeight: 1.45 }
  code: { fontSize: 12px, fontFamily: mono }
  ui-header: { fontSize: 14px, fontWeight: "600", lineHeight: 1.2 }
  ui-section: { fontSize: 15px, lineHeight: 1.45 }
  ui-label: { fontSize: 13.5px, lineHeight: 1.45 }
  meta: { fontSize: 12.5px, lineHeight: 1.5 }
  micro: { fontSize: 12px, lineHeight: 1.45 }
  settings-page-title: { fontSize: 17px, fontWeight: "600", lineHeight: 1.25 }
rounded:
  none: 0
  sm: 4px
  md: 7px
  DEFAULT: 9px
  xl: 12px
  full: 9999px
spacing:
  dropdown-trigger-height: 28px
  toolbar-control-height: 28px
  form-control-height: 32px
  mobile-row: 44px
  mobile-touch-min: 36px
  mobile-header: 56px
  scrollbar-gutter: 6px
elevation:
  button: 'inset 0 1px 0 rgb(255 255 255 / .7), 0 0 0 .5px rgb(0 0 0 / .14), 0 1px 1.5px rgb(0 0 0 / .08)'
  raised: 'inset 0 1px 0 rgb(255 255 255 / .7), 0 0 0 .5px rgb(0 0 0 / .14), 0 1px 2px -.5px rgb(0 0 0 / .06), 0 4px 10px -2px rgb(0 0 0 / .07)'
  floating: 'inset 0 1px 0 rgb(255 255 255 / .7), 0 0 0 .5px rgb(0 0 0 / .14), 0 1px 2px -.5px rgb(0 0 0 / .08), 0 4px 10px -2px rgb(0 0 0 / .11), 0 14px 28px -6px rgb(0 0 0 / .12)'
motion:
  popup: { duration: 251ms, easing: spring-to-linear }
  popup-exit: 110ms
  layout: { duration: 294ms, easing: spring-to-linear }
  glass: { blur: 22px dark / 26px light, opacity: 52% }
components:
  button:
    variants: [default, outline, secondary, ghost, destructive, chip, link]
    sizes: [xs, sm, default, lg, icon]
    rounded: "{rounded.DEFAULT}"
  dropdown-trigger: { height: 28px, rounded: "{rounded.DEFAULT}" }
  field: { height: 32px, rounded: "{rounded.DEFAULT}", background: "{colors.surface-elevated}" }
  tile: { rounded: "{rounded.DEFAULT}", background: "one tone step above parent", border: none }
  tile-inset: { rounded: "{rounded.md}", background: "one step above its tile" }
  glass-popover: { rounded: "{rounded.xl}", blur: 40px, opacity: 97%, border: none }
  modal: { rounded: "{rounded.xl}", background: "{colors.surface-background}", border: none }
---

# OpenChamber Design System

> **非官方文件。** [openchamber](https://github.com/openchamber/openchamber) 仓库里没有 `DESIGN.md`；
> 它的设计规范以 agent skills 形式存在（`.agents/skills/openchamber-ui-guidance`、`theme-system`、
> `settings-ui-patterns`、`locale-ui-patterns`、`rtl-layout`），具体值来自
> `packages/ui/src/styles/design-system.css` 与 `packages/ui/src/lib/theme/themes/*.json`。
> 本文把这些内容按 Google [DESIGN.md](https://github.com/google-labs-code/design.md) 格式
> （YAML tokens + 散文理由）压成一份，供人或 agent 直接投放使用。归属与许可见 `NOTICE.md`。

## Brand & Style

面向开发者、长时间盯屏的 AI coding 工作台。视觉基调是"墨与暖光"：近黑的中性底色（围绕
`#120f0e` 的深棕黑，不是纯黑），配一个橙铜色主色，语法高亮走 Vitesse 系（绿关键字、暖红字符串）。
整体安静、致密、有实体感——像一块磨砂金属上的丝印，而不是玻璃拟态演示页。

三条不变的原则：

1. **安静优先。** 静止的屏幕只显示用户要读的内容和需要用户的东西，其余等 hover、菜单或快捷键。
2. **控件立起来，布局平躺。** 深度只用来区分"可以按"和"只是排版"（见 Elevation）。
3. **颜色只表示状态。** 蓝=正在工作，绿=已完成/待读，黄=等用户（问题、权限），红=错误。
   非状态的强调（置顶、选中的 effort、agent 标签）一律用 muted 或正文色。

## Colors

语义 token 家族，绝不硬编码 hex 或 Tailwind 调色板类：

| 家族 | 角色 |
|---|---|
| `surface.*` | `background` 主画布、`muted` 侧栏/次层、`elevated` 输入框/卡片/弹窗、`subtle` 安静的静态底、`foreground` / `mutedForeground` 正文与次要文字 |
| `interactive.*` | `border` 分隔与描边、`hover` / `active` 交互态、`selection`(+`selectionForeground`) 选中、`focusRing` |
| `primary.*` | `base` 主动作、`hover`、`foreground` |
| `status.*` | error / warning / success / info，各带 foreground、background、border 变体 |
| `syntax.*` | 代码背景/文字/关键字/字符串/数字/diff 增删 |
| `chat.*` `markdown.*` `tools.*` `pr.*` | 会话气泡、Markdown、工具行、PR 状态 |

要点：

- **primary 表示"去做"，selection 表示"当前是"。** 两者独立，不要用 primary 表示选中。
- **有两个染色是产品的声音，任何"颜色只给状态"的清理都别动它们**：用户消息气泡带主题暖调
  （`chat.userMessageBackground`，中性化后用户明确反馈"发灰"）；行内代码有自己的色相
  （`markdown.inlineCode`），且必须避开 success 绿。
- 状态横幅/错误框是**带染色的填充，没有边框**；填充太淡就加染色，不要加回边框。
- 次要文字用 `text-muted-foreground` 全强度，**永不叠 `/50` `/70` 透明度**——每个主题的 muted
  色刚好 4.5:1，再乘透明度就掉下去了。更安静一档用混合色（`oc-title-rest`、`oc-group-label`）。
  允许淡的只有没人需要读的东西：`·` `/` 分隔符、禁用控件、月外日期、大空态插画。
- 主色在深浅两套里含义一致：深色是橙铜 `#da7c47`，浅色压暗到 `#b35017` 以保住对比度。

## Typography

系统字体栈（`-apple-system` → Segoe UI → system-ui），代码用 `ui-monospace`/Cascadia Mono。没有自定义
字体加载，字号全部落在少数几档语义变量上：正文 14px、代码 12px、区块标题 15px、标签 13.5px、
meta 12.5px、micro 12px、设置页标题 17px/600。UI 文本行高统一 `round(1.45em, 1px)`，标题类 1.2。

- **密度不等于挤。** 行要密，但字号不许为了塞更多而低于上面这条尺度；移动端点击区不得小于触控下限。
- **少字。** 标签只命名东西，描述只补标签没说的；解释放 info 提示里，警告和状态留在外面可见。
- **就地一行。** 每条元数据先问"真需要展示吗"——大多数行只有标题就够读；留下来的用 ` · ` 接在同一行，
  不做堆叠副标题。长值截断 + tooltip，不换行。
- **活动行：名字 muted，参数亮。** 工具/Thinking/子 agent 行的名字 muted 常规字重（图标也是），
  用户会扫视并据以行动的部分（命令、路径、搜索词、URL）用正文色，散文性内容（思考预览、描述句）保持 muted。

## Layout & Spacing

- **内容拿走高度。** 内容上方的每条 chrome 都是内容失去的高度。一个 surface 只堆尽可能少的行：
  标题+tab+主操作+搜索开关**共用同一行 header**；第二行只允许放该 surface 自己的状态，不放控件。
- **一个 surface 只命名一次。** header 已经写了标题，body 不要再放大标题。
- **溢出先于换行。** 工具栏永不折到第二行：先截断路径/标题，再把次要操作收进"更多操作"菜单，主操作留外面。
- **按内容定宽。** 控件宽度=它说的内容，超过上限才截断（下拉触发器、分段选择、chip、按钮）。
  只有表单输入框和画布（编辑器、diff、transcript）才铺满列。同一行的控件共用一个高度。
- **分组用间距，不用线。** 相关靠近、无关拉开，divider 是最后手段。线只在有含义时画：区块分隔、
  "添加…"虚线空槽、拖拽落点、大代码画布的框。

## Elevation & Depth

全app只有一条深度规则，所有 surface 由它推出：

- **每一处抬起都是三级之一**：可按控件=button 级；布局里的面（composer、聊天旁的面板）=raised 级；
  浮在布局之上的（菜单、弹窗）=floating 级。每级都是玻璃边在半像素上（1 条 hairline ring + 一条
  受光的顶线，深色主题在亮环外加一圈暗环）压柔阴影。这圈边是品牌自己的样子，调参时别拆它的部件。
- **控件立起，布局平躺。** 按钮、下拉触发器、分段选中项、输入框、composer 都带 hairline 边 + lit top
  line + 短阴影；卡片、列表块、分组、面板**没有边框**，靠色阶区分（tile = 父级上一档，tile-inset =
  tile 上再一档）。**绝不 box in box**：卡里套卡、有边框的行套在有边框的列表里。
- **浮层=玻璃+光。** 菜单、popover、自动补全、选区菜单：背后模糊 + lit top line + hairline + 分层阴影。
  **常驻在动的 transcript 之上的面（composer、状态 pill）故意不透明**，只带同样的光——那里模糊会在每帧流式
  输出时重绘。
- **浅色主题反转。** 浅色下 `surface-elevated` 比画布**更深**，所以抬起的控件取画布色 + 短阴影浮起，
  而输入框是"被按进页面"（淡内阴影）。这是刻意的：输入框是打字的地方，不是按的东西。
- **焦点不画环。** 全局规则清掉所有 `:focus-visible` ring；聚焦的控件取 hover 填充，聚焦的输入框点亮自己的边。
- **两处例外保留完整边框**：大代码画布（文件编辑器/树、diff）——否则它和页面糊在一起；以及拖拽落点。

## Shapes

圆角小而成套：4 / 7 / 9（默认）/ 12 / full。控件几乎都是 9px；tile 内的小块降到 7px；玻璃浮层和
模态用 12px；chip、徽标、头像、状态点用 full。边线一律用"半像素 ring 画在 shadow 里"而不是
`border`——它不占宽度，不会让布局抖。

## Motion

弹簧是唯一的缓动来源：`lib/motion/springs.ts` 把（感知时长, 弹性）编译成 CSS `linear()`，写到
`--oc-motion-popup-*`（菜单/下拉/tooltip，251ms）和 `--oc-motion-layout-*`（控件宽度变化，294ms），
关闭用 110ms 淡出。开发时 `Cmd+Alt+M` 开实时旋钮。

- 只动 `transform` 和 `opacity`；需要旋转写 `transform: rotate()`，不用独立的 `rotate` 属性。
- **能在屏上待几分钟的东西永远不跑无限动画**：稳定态（已连接、失败、不可用）保持静止；
  可能等很久的用共享时钟的 `Spinner`（8 根条，每秒 4 帧）；不能转的用 `useWaitingBlink` 每秒变暗
  （6px 状态点、录制点、骨架屏）；等待文案加 `BusyDots` 并去掉字符串里的 `…`。
  只有持续几秒的 spinner（点击后的按钮、快速加载）用 `animate-spin`。
- 隐藏的 surface 包在 `PauseClock` 里停表；一个页面无论多少指示器都只按 4fps 出帧。

## Components

**Button** — 只有 `Button` 一个组件，禁止 `ButtonSmall` 之类的包装。变体：`default`（局部主动作）、
`outline`（显性次要）、`secondary`（柔次要）、`ghost`（安静的行/工具栏动作）、`destructive`、`chip`
（紧凑可选，配 `aria-pressed`）、`link`（罕见行内文字动作）。尺寸 `xs | sm | default | lg | icon`，
不许手写高度和内边距。

**尺寸两层** — 桌面所有下拉触发器 28px（`dropdownTriggerVariants()` / `SelectTrigger`，表单和工具栏一样）；
工具栏、筛选行、context panel header 全用 28px（`size="sm"`、`<Input inputSize="compact">`）；
表单输入和按钮 32px。选变体，不要用 `h-*` 覆盖邻居。移动端保留自己更大的尺寸。

**Field** — `oc-raised oc-field`，无 `border`、无 `focus-within:ring`；聚焦点亮 hairline，
`aria-invalid`/`data-invalid` 转红。hover 时保持 elevated 底，再叠 `interactive.hover`。

**Tile** — `oc-tile`（可点再加 `oc-tile-hover`）；tile 内的小块（图标方块、中性 pill、嵌套列表、chip、
keycap）用 `oc-tile-inset`。色阶是"把文字色混进下层"，所以同一个类在深浅两套和任意父级上都对。

**菜单 / Popover** — `oc-glass-popover oc-glass-floating`，不加 `border` 也不在自身或包装上加 `shadow-*`
（任一个都会替掉那圈光）。手写的 `Popover.Popup` 必须放 `<GlassRedrawGuard />`，否则 Chromium 留着
过期背景，玻璃后面不糊。

**Banner** — 状态填充色，无边框。

**分段选择 / Tab** — `SettingsChipGroup`，或 `SortableTabsStrip variant="active-pill"`：凹槽
（`oc-recessed`）+ 选中项抬起。互相独立的开关用 chip，别用分段。

**键盘** — 所有用 ↑↓ 导航的菜单/下拉/自动补全同时支持 Ctrl+N/Ctrl+P（含子菜单和可搜索列表），
逻辑留在共享组件里，功能代码不重复按键判断。

**图标** — 统一 `<Icon name="check" className="size-4" />`，不直接从图标库 import，没有 `size` prop。
一行里并排的图标共用一个尺寸：桌面 composer footer 16px、context rail 17px、消息 footer 13px、
侧栏行标记 12px（品牌 logo 可多 1px，因为 logo 填不满画框）。

## Stability & Interaction

用一个控件绝不能挪动用户没碰的东西。

- **就地展开**：选项带出更多内容时，在布局已有的空间或容器预留的空间里显示，保持高度不变；
  选项间切换要么等高换内容，要么按最高变体预留；为其他选项显示的禁用替身要有真实控件的精确形状。
- **状态行有预留槽**：能产生消息的控件（加载/空/错/完成）在下方留恒定的那一行，空的也在；
  显示最重要的那条，截断 + tooltip。
- **朝远离焦点方向长**：composer 模式加的行放在输入框上方，让输入框不动。
- **状态不改尺寸**：选中/hover/active/loading 只改颜色和填充，永不改宽高、字重引起的回流、
  或凭空出现的 padding/border。出 spinner 的按钮保持宽度。
- **宽度变化要缓动**：值会变宽的 picker 用 `useWidthMorph`；选择后才出现的标记放在标签之后，标签永不位移。
  打开的弹窗内容变化用 `useHeightMorph`，贴触发器的那条边保持不动。
- **滚动条预留槽**：所有 overlay scroller 无论是否溢出都留 6px gutter，列表跨过阈值时内容不跳。
- **弹窗朝有空间的一侧开**，永不挤进窗口边缘的窄缝。

## The phone

同一控件在不同屏幕上落在拇指下同一个点。差异几个像素就读作漂移。

- 顶栏：`MOBILE_HEADER_CLASS` / `MOBILE_HEADER_BUTTON_CLASS` / `MOBILE_HEADER_TITLE_CLASS`——56px 高，
  40px 圆按钮距边 28px，标题起点 60px；返回 `arrow-left`、关闭 `close`，不许即兴画。
- 列表行 44px，其他触控控件 ≥36px。手机上的对话框一律是底部 sheet（`MobileOverlayPanel`）；
  2–5 个动作的短列表仍是下拉。菜单图标是横排 `more`。
- **文字优先于图标**：手机没有 tooltip，图标只有自己能读懂时才单独出现。
- 长文件名：完整文件名在前，文件夹在下方 muted 行并先截断。
- 数字只报客户端真知道的：长会话只有尾巴，别把已加载消息求和当会话总量；token 紧凑写（`13.7M`）。

## 会静默毁掉观感的坑

- 调用点自带的 `shadow-*` 会替掉那圈光：`oc-raised`、`oc-field`、`oc-tile*`、`oc-raised-button` 都在
  `@layer components` 里，任何 `shadow-*` 工具类都赢它——这也是刻意去掉边的手段（`shadow-none`）。
- 深色底不会自己消失：抬起控件基色带 `dark:bg-surface-elevated`，调用点写 `bg-transparent` 时必须同时写
  `dark:bg-transparent`。
- `Button variant="outline"` 套触发器会把 surface 又带回来，包触发器用 `variant="ghost"`。
- 面板的填色不能复用"文字色阶"：面板里的 tile 靠同一档色阶站立，面板自己要用页面色 + hairline ring（`oc-panel-edge`）。
- `.chat-message-column` 的规则会重复：消息列是嵌套的，宽度/内距写在这上面会每层生效；transcript 的间距写在 `.chat-scroll` 上。
- 背景图 hover 会替掉 sheen：hover/focus 覆层是 `background-image` 渐变，深色抬起控件上它充当 sheen，别再叠第二层。

## Review before finishing

- 每个 surface 守深度规则：没有 box in box，没有无意义的线。
- 交互不挪动没碰的东西；每个弹窗在最小窗口里也朝有空间的方向开。
- 没有 surface 把 header/tab/工具栏/搜索堆成四行，没有工具栏换行。
- 控件贴内容，只有表单字段和画布铺满。
- 图标在行内，行尽量读成一行。
- 区域不超过它的"静止预算"，颜色只表示状态。
- **浅色和深色两套主题都看过。**

---

## 附录：组件实测规格（源码级）

下面这些数字不是从截图量的，是读 openchamber 源码里的 Tailwind / cva 类得出的，括号内是文件。

### Button（`packages/ui/src/components/ui/button-variants.ts`）

| 尺寸 | 高度 | 横向内距 | 圆角 | 字号 |
|---|---|---|---|---|
| `default` | 32px (h-8) | 12px | 7px | 13.5px / 500 |
| `sm` | 28px (h-7) | 10px | 7px | 13.5px |
| `xs` | 24px (h-6) | 8px | 5px | 12px |
| `lg` | 36px (h-9) | 16px | 9px | 13.5px |
| `icon` | 32×32 | — | 7px | — |

基类：`rounded-md typography-ui-label font-medium gap-2`。

### 下拉触发器（`ui/dropdown-trigger.ts`，被 `ui/select.tsx` 复用）

28px / 横向 10px / 圆角 7px / 间距 6px，`oc-raised`；浅色主题取画布色、深色取 `surface.elevated`；箭头 16px 半透明。
变体：`mobile` 32px、`touch` 44px。

### 输入框（`ui/input.tsx`）

32px（`inputSize="compact"` 时 28px）/ 圆角 7px / 横向 10px / `surface.elevated` 底 / `oc-raised oc-field`。

### 分段选择 = SettingsChipGroup（`sections/shared/SettingsSection.tsx`）

轨道：`oc-recessed` + 9px 圆角 + 2px 内距 + 2px 间距 + `foreground 4%` 底。
选项：ghost Button 的 `sm` 尺寸（28px / r7 / 13.5px / 字重 400）。
选中项：`oc-raised` + 画布色（浅色）/ `surface.elevated`（深色）——注意深色主题下 elevated 与画布接近，选中主要靠那圈边。

### 步进器（`ui/number-input.tsx`）

高度 32px / 圆角 9px / `surface.elevated` + 1px `border`；
`−` `+` 各 36px 宽，内侧各一条分隔线；数值区最小宽 `calc(5.75rem + 5ch)` 居中；
单位后缀是 `typography-meta` 的 muted，重置按钮 32×32。

### 设置页节奏与字号（`sections/shared/SettingsSection.tsx`、`styles/typography.css`）

- 两列：列间距 40px（`@3xl:gap-10`）、行间距 24px（`gap-6`）
- 同一列内字段堆叠 16px（`space-y-4`），标签到控件 8px（`space-y-2`）
- 控件行：间距 8px、宽度上限 24rem
- 字号：页标题 17/600、区块标题 14/600 lh1.2、组标题 13.5/500、字段标签 13.5/400 lh1.2 且用**正文色**（不是 muted）、描述 12.5/400 lh1.5 muted

---

### 来源对照

| 本文件章节 | 仓库文件 |
|---|---|
| Brand/Style、Elevation、Stability、Vertical space、Composition、phone | `.agents/skills/openchamber-ui-guidance/SKILL.md` + `references/surfaces.md` |
| Colors、Button、图标、Motion、键盘 | `.agents/skills/theme-system/SKILL.md` + `references/tokens-and-examples.md`、`references/icons.md` |
| token 具体值 | `packages/ui/src/lib/theme/themes/openchamber-{dark,light}.json` |
| 圆角/字号/阴影/弹簧 | `packages/ui/src/styles/design-system.css`、`typography.css` |
| 设置页组成 | `.agents/skills/settings-ui-patterns/SKILL.md` |
| 文案规则 | `.agents/skills/locale-ui-patterns/SKILL.md`、`communication-style` |
| 双向布局 | `.agents/skills/rtl-layout/SKILL.md` |
