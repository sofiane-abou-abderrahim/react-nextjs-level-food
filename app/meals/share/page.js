import Link from 'next/link';

export default function MealsSharePage() {
  return (
    <main>
      <h1>The Meals Share</h1>
      <p>
        <Link href="/meals">Go back to Meals</Link>
      </p>
      <p>
        <Link href="/">Go back to home page</Link>
      </p>
    </main>
  );
}
