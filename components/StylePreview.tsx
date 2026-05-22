import React from "react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h2 className="font-display text-label-lg text-on-surface-variant">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`h-14 w-14 rounded-md border border-outline-variant ${className}`} />
      <span className="font-body text-[10px] text-on-surface-variant">{name}</span>
    </div>
  );
}

function FontSample({
  label,
  hint,
  fontClass,
  children,
}: {
  label: string;
  hint: string;
  fontClass: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-stack-sm rounded-md border-2 border-outline-variant bg-surface-container-lowest p-gutter">
      <div>
        <p className={`font-body text-label-md text-on-surface-variant ${fontClass}`}>
          {label}
        </p>
        <p className={`font-body text-[11px] text-outline ${fontClass}`}>{hint}</p>
      </div>
      <div className={`flex flex-col gap-2 ${fontClass}`}>{children}</div>
    </div>
  );
}

export default function StylePreview() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-stack-lg px-margin-mobile py-stack-lg md:px-margin-desktop">
      {/* 1. 画布 & 标题层级 */}
      <header className="flex flex-col gap-stack-sm">
        <h1 className="font-display text-headline-xl text-primary tracking-tight">
          Magic Words 预览
        </h1>
        <p className="font-body text-body-md text-on-surface-variant">
          验收设计 token：颜色、字体、圆角、间距、Gummy 按钮。
        </p>
      </header>

      {/* 2. 品牌色 */}
      <Section title="品牌色">
        <div className="flex flex-wrap gap-gutter">
          <Swatch name="primary" className="bg-primary" />
          <Swatch name="primary-container" className="bg-primary-container" />
          <Swatch name="secondary-container" className="bg-secondary-container" />
          <Swatch name="tertiary-container" className="bg-tertiary-container" />
          <Swatch name="magic" className="bg-magic" />
          <Swatch name="success" className="bg-success" />
          <Swatch name="attention" className="bg-attention" />
        </div>
      </Section>

      {/* 3. Surface 层级 */}
      <Section title="Surface">
        <div className="flex flex-col gap-stack-sm">
          <div className="rounded-md bg-surface-container p-gutter">surface-container</div>
          <div className="rounded-md bg-surface-container-high p-gutter">
            surface-container-high
          </div>
          <div className="rounded-md border-2 border-outline-variant bg-surface-container-lowest p-gutter">
            Story Card（白底 + 描边）
          </div>
        </div>
      </Section>

      {/* 4. 排版 */}
      <Section title="排版">
        <p className="font-display text-headline-lg text-on-surface">
          Headline LG — Quicksand 700
        </p>
        <p className="font-display text-headline-lg-mobile text-primary md:hidden">
          Headline LG Mobile
        </p>
        <p className="font-body text-body-lg text-on-surface">Body LG — 20px</p>
        <p className="font-body text-body-md text-on-surface-variant">
          Body MD — 18px 最小正文
        </p>
        <p className="font-body text-body-md">
          关键词：<span className="font-display text-primary">Magic</span>{" "}
          <span className="font-display text-secondary">正确</span>
        </p>
      </Section>

      {/* 5. 中文字体对比 */}
      <Section title="中文字体对比">
        <p className="font-body text-body-md text-on-surface-variant">
          「思源柔黑」在此使用 Resource Han Rounded CN（资源圆体）。与 Noto / 站酷快乐体并排对比。
        </p>
        <div className="flex flex-col gap-stack-md">
          <FontSample
            label="思源柔黑 · font-cn-rounded（Resource Han Rounded CN）"
            hint="推荐正文：圆润笔画，与 Quicksand 气质接近；变量字体约 64MB"
            fontClass="font-cn-rounded ring-2 ring-primary ring-offset-2 ring-offset-surface"
          >
            <p className="text-headline-lg font-bold text-primary">
              叮当英语，一起冒险！
            </p>
            <p className="text-body-lg text-on-surface">
              今天我们来学 magic words，跟读三遍就能解锁新关卡。
            </p>
            <p className="text-body-md text-on-surface-variant">
              最小正文 18px：圆润的「口」「圆」更适合儿童阅读，笔画末端柔和不刺眼。
            </p>
            <p className="text-body-md">
              关键词：
              <span className="font-bold text-primary"> Magic </span>
              <span className="font-bold text-secondary">正确</span>
            </p>
          </FontSample>

          <FontSample
            label="站酷快乐体 · font-cn-display"
            hint="适合：大标题、勋章、空状态（不宜长正文）"
            fontClass="font-cn-display"
          >
            <p className="text-headline-lg text-primary">叮当英语，一起冒险！</p>
            <p className="text-label-lg text-secondary">太棒了 · 继续加油</p>
          </FontSample>

          <FontSample
            label="Noto Sans SC · font-cn-body"
            hint="适合：说明、故事正文、表单（圆润、可读）"
            fontClass="font-cn-body"
          >
            <p className="text-body-lg text-on-surface">
              今天我们来学 magic words，跟读三遍就能解锁新关卡。
            </p>
            <p className="text-body-md text-on-surface-variant">
              最小正文 18px：小朋友的手指和眼睛都需要更大的点击区域和字号。
            </p>
          </FontSample>

          <FontSample
            label="系统字体 · font-cn-system"
            hint="苹方 / 雅黑，仅作本机对照，各设备不一致"
            fontClass="font-cn-system"
          >
            <p className="text-headline-lg text-on-surface">系统字体标题对照</p>
            <p className="text-body-md text-on-surface-variant">系统字体正文对照</p>
          </FontSample>

          <FontSample
            label="中英混排（柔黑正文）· font-body-rounded-mixed"
            hint="英文 Jakarta + 中文资源圆体，不含 Noto"
            fontClass="font-body-rounded-mixed"
          >
            <p className="font-display-mixed text-headline-lg text-primary">
              Magic Words 叮当英语
            </p>
            <p className="text-body-md text-on-surface">
              Read aloud: <span className="font-display-mixed text-secondary">apple</span>
              {" "}· 跟读：<span className="font-display-mixed text-primary">苹果</span>
            </p>
          </FontSample>

          <FontSample
            label="中英混排 · font-display-mixed / font-body-mixed"
            hint="英文 Quicksand/Jakarta + 中文站酷/Noto（旧方案对照）"
            fontClass="font-body-mixed"
          >
            <p className="font-display-mixed text-headline-lg text-primary">
              Magic Words 叮当英语
            </p>
            <p className="text-body-md text-on-surface">
              Read aloud: <span className="font-display-mixed text-secondary">apple</span>{" "}
              · 跟读：<span className="font-display-mixed text-primary">苹果</span>
            </p>
            <button
              type="button"
              className="min-h-12 w-fit rounded-full bg-primary px-8 py-3 font-display-mixed text-label-lg text-on-primary gummy-primary active:gummy-primary-active"
            >
              开始冒险 Start
            </button>
          </FontSample>
        </div>
      </Section>

      {/* 6. 圆角 */}
      <Section title="圆角">
        <div className="flex flex-wrap items-end gap-gutter">
          <div className="flex h-16 w-24 items-center justify-center rounded-sm bg-primary-container font-display text-label-md text-on-primary-container">
            sm
          </div>
          <div className="flex h-16 w-24 items-center justify-center rounded bg-primary-container font-display text-label-md text-on-primary-container">
            default
          </div>
          <div className="flex h-16 w-24 items-center justify-center rounded-md bg-primary-container font-display text-label-md text-on-primary-container">
            md
          </div>
          <div className="flex h-16 w-24 items-center justify-center rounded-lg bg-primary-container font-display text-label-md text-on-primary-container">
            lg
          </div>
          <div className="flex h-16 w-24 items-center justify-center rounded-xl bg-primary-container font-display text-label-md text-on-primary-container">
            xl
          </div>
          <div className="flex h-16 w-24 items-center justify-center rounded-full bg-primary-container font-display text-label-md text-on-primary-container">
            full
          </div>
        </div>
      </Section>

      {/* 7. Gummy 按钮 — 用 active: 模拟按压 */}
      <Section title="Gummy 按钮">
        <div className="flex flex-wrap gap-gutter">
          <button
            type="button"
            className="min-h-12 rounded-full bg-primary px-8 py-3 font-display text-label-lg text-on-primary transition-transform gummy-primary active:gummy-primary-active"
          >
            Primary
          </button>
          <button
            type="button"
            className="min-h-12 rounded-full bg-secondary-container px-8 py-3 font-display text-label-lg text-on-secondary-container transition-transform gummy-secondary active:gummy-secondary-active"
          >
            Success
          </button>
          <button
            type="button"
            className="min-h-12 rounded-full bg-tertiary-container px-8 py-3 font-display text-label-lg text-on-tertiary-container transition-transform gummy-tertiary active:gummy-tertiary-active"
          >
            Attention
          </button>
        </div>
        <p className="font-body text-body-md text-on-surface-variant">
          按住按钮看是否「下沉」、底边阴影是否变色。
        </p>
      </Section>

      {/* 8. Magic Input（聚焦态） */}
      <Section title="Magic Input">
        <input
          type="text"
          placeholder="说点什么…"
          className="min-h-12 w-full rounded-full border-2 border-outline-variant bg-surface-container-lowest px-6 font-body text-body-md outline-none focus:border-secondary-container focus:ring-4 focus:ring-secondary-container/30"
        />
      </Section>

      {/* 9. Error */}
      <Section title="Error">
        <div className="rounded-md bg-error-container px-gutter py-stack-sm font-body text-body-md text-on-error-container">
          错误提示样式
        </div>
      </Section>
    </main>
  );
}