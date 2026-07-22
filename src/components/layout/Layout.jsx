import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Header />
      <main id="main-content" role="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
