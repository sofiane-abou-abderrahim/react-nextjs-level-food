import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>The Meals</h1>
      <p>
        <Link href="/meals/share">Share a meal</Link>
      </p>
      <p>
        <Link href="/meals/meal-1">Meal 1</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">Meal 2</Link>
      </p>
      <p>
        <Link href="/">Go back to home page</Link>
      </p>
    </main>
  );
}
