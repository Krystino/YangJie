import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-8">
          <div className="flex-shrink-0">
            <img 
              src="/selfie.jpg" 
              alt="杨杰"
              className="h-24 w-auto"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">杨杰</h1>
            <div className="mt-2 text-gray-600">
              <p>Phone/Wechat: +86 13157577935</p>
              <p>Email: yangjie@westlake.edu.cn</p>
              <p>Google Scholar: <a href="#" className="text-blue-600 hover:underline">Link</a></p>
            </div>
          </div>
        </div>
        <nav className="mt-6">
          <ul className="flex space-x-8">
            <li><Link to="/" className="text-blue-600 hover:text-blue-800">主页</Link></li>
            <li><Link to="/research" className="text-blue-600 hover:text-blue-800">研究项目</Link></li>
            <li><Link to="/publications" className="text-blue-600 hover:text-blue-800">论文发表</Link></li>
            <li><Link to="/teaching" className="text-blue-600 hover:text-blue-800">我的书籍</Link></li>
            <li><Link to="/news" className="text-blue-600 hover:text-blue-800">新闻报道</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}