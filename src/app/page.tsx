import Link from "next/link";
export default function Home() {
  return (
    <>
      
      <div>
        <h1>this is your own website</h1>
        <Link href="/">Go to Home page</Link>
        <Link href="/films">Go to Films page</Link>
        <Link href="/drama">Go to Drama page</Link>
        <Link href="/aboute">Go to About page</Link>
      </div>
    </>
  );
}
