"use client"

import { trpc } from "@/trpc/client"

export const PageClient = () => {
    const [data] = trpc.hello.useSuspenseQuery({text: "Prasanna"})
    return (
        <div>
            Page Client says: {data.greeeting}
        </div>
    )
}