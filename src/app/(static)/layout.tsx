'use client'
export default function StaticLayout({ children }: { children: React.ReactNode }) {


    console.log("children")
    return (
        <>
            <h1>Children of thanos</h1>
            {children}
        </>
    )
}