import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-50 text-slate-900">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Page not found</p>
      <Link href="/" className="mt-8 bg-slate-900 text-white px-6 py-2 rounded">
        Return Home
      </Link>
    </div>
  );
}
