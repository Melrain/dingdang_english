import localFont from "next/font/local";

/** 资源圆体 CN（业界常称「思源柔黑」），源自 Source Han Sans 的圆润衍生版 */
export const sourceHanRounded = localFont({
  src: "../public/fonts/resource-han-rounded/ResourceHanRoundedCN-VF.otf",
  variable: "--font-source-han-rounded",
  weight: "100 900",
  display: "swap",
  fallback: ["PingFang SC", "Microsoft YaHei UI", "sans-serif"],
});
