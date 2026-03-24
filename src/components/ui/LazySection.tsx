import { Suspense, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"

type Props = {
    children: ReactNode
    fallback: ReactNode
}

export default function LazySection({ children, fallback }: Props) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "200px",
    })

    return (
        <div ref={ref} className="min-h-[300px]">
        {inView ? (
            <Suspense fallback={fallback}>
            {children}
            </Suspense>
        ) : (
            fallback
        )}
        </div>
    )
}
