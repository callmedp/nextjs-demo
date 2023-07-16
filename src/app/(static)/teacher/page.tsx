import Link from "next/link"

export default function Teacher() {

    return (
        <>
            <div>Teacher page</div>
            <Link href="/static/lilone" prefetch={false}>
                <button >Lilone</button>
            </Link>
        </>
    )
}