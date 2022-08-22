import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";

export default function Admin() {
  const { data: session } = useSession();
    
  console.log('session', session);

  if (session?.user && session.user.type === 'admin') {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Link href={'apps'}>apps</Link>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn(undefined, { redirect: true, callbackUrl: 'http://localhost:3000/admin'})}>Sign in</button>
    </>
  )
}