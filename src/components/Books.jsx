import { books } from '../data/books';

export default function Books() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">我的书籍</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {books.map((book, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">
                作者: {book.authors.join(', ')}
              </p>
              <p className="text-gray-600 mb-4">
                出版年份: {book.year}
              </p>
              <p className="text-gray-700 mb-4">{book.description}</p>
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                了解更多 →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}