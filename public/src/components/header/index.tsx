import { h } from 'preact';

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="flex flex-row py-5 px-4">
      <a href="/" className="flex flex-row items-center gap-x-3">
        <h1 class="text-xl text-green-900">Light Micro SaaS</h1>
      </a>
    </div>
  </header>
);

export default Header;
