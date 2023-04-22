import { Link } from "react-router-dom";

export function Header({ onCartClick }: HeaderProps) {
  return (
    <header className="header sticky z-50 top-0 bg-gray-800 flex items-center justify-between px-8 py-3 h-16">
      <Logo />
      <Navigation {...{ onCartClick }} />
    </header>
  );
}
interface HeaderProps {
  onCartClick: Function;
}

function Navigation({ onCartClick }: NavigationProps) {
  return (
    <div className="w-3/12 flex justify-end gap-x-1 items-center">
      <FinderIcon />
      <CartIcon onClick={onCartClick} />
      <UserIcon />
    </div>
  );
}
interface NavigationProps {
  onCartClick: Function;
}

function UserIcon() {
  return (
    <svg
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      version="1.1"
    >
      <path d="M15.992 2c3.396 0 6.998 2.86 6.998 4.995v4.997c0 1.924-0.8 5.604-2.945 7.293-0.547 0.43-0.831 1.115-0.749 1.807 0.082 0.692 0.518 1.291 1.151 1.582l8.703 4.127c0.068 0.031 0.834 0.16 0.834 1.23l0.001 1.952-27.984 0.002v-2.029c0-0.795 0.596-1.045 0.835-1.154l8.782-4.145c0.63-0.289 1.065-0.885 1.149-1.573s-0.193-1.37-0.733-1.803c-2.078-1.668-3.046-5.335-3.046-7.287v-4.997c0.001-2.089 3.638-4.995 7.004-4.995zM15.992-0c-4.416 0-9.004 3.686-9.004 6.996v4.997c0 2.184 0.997 6.601 3.793 8.847l-8.783 4.145s-1.998 0.89-1.998 1.999v3.001c0 1.105 0.895 1.999 1.998 1.999h27.986c1.105 0 1.999-0.895 1.999-1.999v-3.001c0-1.175-1.999-1.999-1.999-1.999l-8.703-4.127c2.77-2.18 3.708-6.464 3.708-8.865v-4.997c0-3.31-4.582-6.995-8.998-6.995v0z" />
    </svg>
  );
}

function CartIcon({ onClick }: CartIconProps) {
  return (
    <svg
      onClick={() => onClick()}
      className="h-8 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-shopping-cart fa-w-18 fa-7x cursor-pointer"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="shopping-cart"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
    >
      <path
        fill="white"
        d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
        className=""
      ></path>
    </svg>
  );
}
interface CartIconProps {
  onClick: Function;
}

function FinderIcon() {
  return (
    <svg
      className="h-8 p-1 hover:text-green-500 duration-200 svg-inline--fa fa-search fa-w-16 fa-9x"
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="search"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="white"
        d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
        className=""
      ></path>
    </svg>
  );
}

function Logo() {
  return (
    <Link to={"/"} className="w-3/12 flex justify-start items-center">
      <img src="/favicon.png" alt="Books cart" />
      <h1 className="px-2 py-1 font-extrabold text-gray-300">Books Cart</h1>
    </Link>
  );
}
