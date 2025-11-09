import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-slate-900 mb-12">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/blog/paranormal" className="p-6 bg-purple-100 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-2">👻</div>
          <h2 className="text-2xl font-bold text-slate-900">Paranormal</h2>
        </Link>
        <Link href="/blog/tech" className="p-6 bg-blue-100 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-2">💻</div>
          <h2 className="text-2xl font-bold text-slate-900">Tech</h2>
        </Link>
        <Link href="/blog/life" className="p-6 bg-pink-100 rounded-xl hover:shadow-lg transition">
          <div className="text-4xl mb-2">☕</div>
          <h2 className="text-2xl font-bold text-slate-900">Slice of Life</h2>
        </Link>
      </div>
    </div>
  );
}