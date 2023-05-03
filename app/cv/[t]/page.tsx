import type { Route } from 'next';
import Link from 'next/link';

export default function Page({params}: {params: {t: string}}) {
    return <Link href={"/asdf"}>{params.t}</Link>
};