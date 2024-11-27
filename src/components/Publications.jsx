import { useState } from 'react';
import { publications } from '../data/publications';

export default function Publications() {
  const [selectedYear, setSelectedYear] = useState(2024);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-6">论文发表</h2>
      <div className="flex gap-4 mb-6">
        {publications.map((pub) => (
          <button
            key={pub.year}
            onClick={() => setSelectedYear(pub.year)}
            className={`px-4 py-2 rounded ${
              selectedYear === pub.year
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {pub.year}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {publications
          .find((pub) => pub.year === selectedYear)
          ?.items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="text-sm text-gray-500 mb-1">{item.date}</div>
              <h3 className="font-medium mb-1">{item.title}</h3>
              <div className="text-gray-600">{item.conference}</div>
            </div>
          ))}
      </div>
    </section>
  );
}