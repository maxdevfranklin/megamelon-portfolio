import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-4xl gold-text">Lost in the Void</h1>
      <p className="mt-4 text-parchment-dim">This chronicle does not exist in our archives.</p>
      <Link href="/" className="btn-fantasy mt-8">
        Return Home
      </Link>
    </div>
  );
}
