import { h } from 'preact';

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="flex flex-row py-5 px-4">
      <a href="/" className="flex flex-row items-center gap-x-3">
        <img
          src="../../assets/digipetro-logo.png"
          alt="Digipetro Logo"
          height="32"
          width="32"
        />
        <h1 class="text-xl text-green-900">DigiPay</h1>
      </a>
    </div>
  </header>
);

export default Header;
