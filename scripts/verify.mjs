/**
 * 静态自检：不联网、不装依赖，验证仓库内容完整且没有泄漏本机路径。
 *   node scripts/verify.mjs
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let pass = 0;
const fails = [];

const check = (name, fn) => {
  try {
    const detail = fn();
    pass++;
    console.log(`  ok   ${name}${detail ? ` — ${detail}` : ''}`);
  } catch (err) {
    fails.push(`${name}: ${err.message}`);
    console.log(`  FAIL ${name} — ${err.message}`);
  }
};
const assert = (cond, msg) => { if (!cond) throw new Error(msg); };
const read = (rel) => readFileSync(join(root, rel), 'utf8');

console.log('files');
for (const rel of [
  'README.md', 'DESIGN.md', 'NOTICE.md', 'LICENSE',
  'demo/openchamber.html', 'demo/vercel.html', 'demo/assets/fonts.css',
  'tokens/openchamber-dark.json', 'tokens/openchamber-light.json',
  'tokens/vercel-dark.json', 'tokens/vercel-light.json',
  'licenses/OFL-1.1-Inter.txt', 'licenses/OFL-1.1-Geist-Mono.txt',
]) check(rel, () => { assert(existsSync(join(root, rel)), '缺失'); });

console.log('\nDESIGN.md');
check('frontmatter 有 tokens', () => {
  const fm = read('DESIGN.md').split('---')[1];
  for (const key of ['name:', 'colors:', 'typography:', 'rounded:', 'spacing:']) {
    assert(fm.includes(key), `frontmatter 缺 ${key}`);
  }
  const colors = fm.split('colors:')[1].split('typography:')[0].match(/^\s{2}[a-z-]+:/gm) || [];
  assert(colors.length >= 20, `颜色 token 只有 ${colors.length} 个`);
  return `${colors.length} 个颜色 token`;
});
check('收录组件实测规格', () => {
  const d = read('DESIGN.md');
  for (const k of ['Button（', '下拉触发器（', 'SettingsChipGroup', '步进器（', '设置页节奏']) {
    assert(d.includes(k), `缺 "${k}" 小节`);
  }
  return '5 节';
});

console.log('\ntokens');
for (const file of readdirSync(join(root, 'tokens')).filter((f) => f.endsWith('.json'))) {
  check(file, () => {
    const t = JSON.parse(read(`tokens/${file}`));
    assert(t.metadata?.id && t.metadata?.variant, '缺 metadata');
    for (const family of ['primary', 'surface', 'interactive', 'status', 'syntax']) {
      assert(t.colors?.[family], `缺 colors.${family}`);
    }
    return `${t.metadata.id} / ${t.metadata.variant}`;
  });
}

console.log('\ndemo');
for (const file of ['demo/openchamber.html', 'demo/vercel.html']) {
  check(`${file} 双主题`, () => {
    const h = read(file);
    assert(h.includes(':root[data-theme="light"]'), '缺浅色 token 块');
    assert(/:root, :root\[data-theme="dark"\]/.test(h), '缺深色 token 块');
    return 'dark + light';
  });
  check(`${file} 组件齐备`, () => {
    const h = read(file);
    for (const sel of ['.set-title', '.stepper', '.seg', '.trigger', '.set-label']) {
      assert(h.includes(sel), `缺 ${sel}`);
    }
    return '设置面板 + 控件';
  });
  check(`${file} 不依赖网络`, () => {
    const h = read(file);
    assert(h.includes('href="assets/fonts.css"'), '没引本地字体表');
    // 只允许 data: 与相对路径；出现 http(s) 资源即视为会依赖网络
    const remote = (h.match(/(?:src|href)="https?:\/\/[^"]+"/g) || []);
    assert(remote.length === 0, `有远程资源 ${remote.slice(0, 2).join(', ')}`);
    return '无远程资源';
  });
}
check('fonts.css 内嵌两个字体', () => {
  const css = read('demo/assets/fonts.css');
  const faces = css.match(/@font-face\{/g) || [];
  assert(faces.length === 2, `@font-face 数量 ${faces.length}`);
  assert((css.match(/data:font\/woff2;base64,/g) || []).length === 2, '字体不是内嵌的');
  return 'Inter + Geist Mono';
});

console.log('\n隐私');
check('没有本机路径', () => {
  // 通用形态，不写死用户名——脚本自己也不带本机痕迹
  const SUSPECT = ['Users\\', '/Users/', '/home/', 'workbuddy'];
  const hits = [];
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      if (e.name === '.git' || e.name === 'node_modules') continue;
      // 扫描器自身含检测串，跳过自己
      if (join(dir, e.name) === join(root, 'scripts', 'verify.mjs')) continue;
      const rel = join(dir, e.name);
      if (e.isDirectory()) { walk(rel); continue; }
      if (!/\.(md|html|css|mjs|json|txt)$/.test(e.name)) continue;
      const text = readFileSync(rel, 'utf8');
      if (SUSPECT.some((s) => text.includes(s))) hits.push(rel.replace(root, '.'));
    }
  };
  walk(root);
  assert(hits.length === 0, `命中 ${hits.join(', ')}`);
  return '干净';
});

console.log(`\n${pass} passed, ${fails.length} failed`);
if (fails.length) { fails.forEach((f) => console.log(` - ${f}`)); process.exit(1); }
