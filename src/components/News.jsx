import { news } from '../data/news';

export default function News() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">新闻报道</h2>
      <div className="space-y-4">
        {news.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="text-sm text-gray-500 mb-2">{item.date}</div>
            <a
              href={item.link}
              className="text-lg text-gray-900 hover:text-blue-600 block"
            >
              {item.title}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}