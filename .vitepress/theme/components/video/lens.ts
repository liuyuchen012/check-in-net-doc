// 镜头推近工具：根据阶段内时间线平滑缩放/平移，聚焦正在展示的细节区域
// 关键帧格式：[t 秒, 聚焦中心 x%, y%（相对 1920x1080 舞台）, scale]
// 舞台 transform-origin 必须为 0 0（见 VideoShowcase .vstage）
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

export type LensKeyframe = [number, number, number, number]

const BASE_W = 1920
const BASE_H = 1080

function build(cx: number, cy: number, s: number): string {
  const tx = BASE_W * (0.5 - (cx / 100) * s)
  const ty = BASE_H * (0.5 - (cy / 100) * s)
  return `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px) scale(${s.toFixed(3)})`
}

function sample(t: number, kfs: LensKeyframe[]): string {
  if (t <= kfs[0][0]) return build(kfs[0][1], kfs[0][2], kfs[0][3])
  for (let i = 0; i < kfs.length - 1; i++) {
    const [t0, x0, y0, s0] = kfs[i]
    const [t1, x1, y1, s1] = kfs[i + 1]
    if (t <= t1) {
      const p = Math.min(1, Math.max(0, (t - t0) / (t1 - t0)))
      const e = p * p * (3 - 2 * p) // smoothstep 缓动
      return build(x0 + (x1 - x0) * e, y0 + (y1 - y0) * e, s0 + (s1 - s0) * e)
    }
  }
  const last = kfs[kfs.length - 1]
  return build(last[1], last[2], last[3])
}

export function useLens(kfs: LensKeyframe[]) {
  const t = ref(0)
  let iv: number | undefined
  onMounted(() => {
    iv = window.setInterval(() => { t.value += 0.1 }, 100)
  })
  onBeforeUnmount(() => {
    if (iv !== undefined) window.clearInterval(iv)
  })
  const lens = computed(() => sample(t.value, kfs))
  return { lens }
}
