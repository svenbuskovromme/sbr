import Link from "next/link";
import Text from "../components/Text";
import inline from "../styles/inlines";

export default function Component(){
    return <div style={{height: inline.header.height, backdropFilter: 'blur(8px)', padding: 30, gap: 30, flexWrap: 'wrap-reverse', justifyContent: 'flex-end', width: '100dvw', position: 'fixed', display: 'flex', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 30, flexWrap: 'wrap'}}>
            {/* <Link href={'/services'}>Services</Link> */}
            <Link href={'/cv'}>CVs</Link>
            <Link href={'/projects'}>Projects</Link>
            {/* <Link href={'/contact'}>Contact</Link> */}
        </div>
        <Link href={'/'}>
            <Text.Header style={{fontSize: 24, fontWeight: '600'}}>Sven Buskov Romme</Text.Header>
        </Link>
    </div>
};