type SmoothScrollOptions = {
  offset?: number
  durationMs?: number
  easingFn?: (t: number) => number
}

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function smoothScrollTo(element: HTMLElement, options?: SmoothScrollOptions) {
  const { offset = 80, durationMs = 600, easingFn = easeInOutCubic } = options || {}

  const startY = window.scrollY
  const targetY = element.getBoundingClientRect().top + window.scrollY - offset
  const distance = targetY - startY

  if (Math.abs(distance) < 1) return

  let startTime: number | null = null

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp

    const elapsed = timestamp - startTime
    const progress = Math.min(elapsed / durationMs, 1)
    const eased = easingFn(progress)

    window.scrollTo(0, startY + distance * eased)

    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
}

