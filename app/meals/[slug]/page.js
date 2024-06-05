import Link from 'next/link';

export default function MealPage({ params }) {
  return (
    <main>
      <h1>Meal</h1>
      <p>{params.slug}</p>
      <p>
        <Link href="/meals">Go back to meals</Link>
      </p>
    </main>
  );
}
