import { useState } from "react";
import { useLayer, Arrow } from "react-laag";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [query, setQuery] = useState("");

  //
  const [isOpen, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    placement: "bottom-end",
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
   // auto: true,  automatically find the best placement
    triggerOffset: 12, // keep some distance to the trigger
    containerOffset: 5, // give the menu some room to breath relative to the container
    arrowOffset: 5, // let the arrow have some room to breath also
  });

  // saving icons in consts
  const searchIcon = (
    <svg
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden="true"
      style={{
        width: "1.25rem",
        height: "1.25rem",
        background: "#f5f5f5",
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
  const unsplashIcon = (
    <svg
      width="26"
      height="26"
      viewBox="0 0 32 32"
      version="1.1"
      aria-labelledby="unsplash-home"
      aria-hidden="false"
    >
      <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
    </svg>
  );
  const menuIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      version="1.1"
      aria-hidden="false"
    >
      <path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path>
    </svg>
  );
  const AvatarIcon = (
    <img
      style={{ borderRadius: "50%" }}
      width="27"
      height="27"
      src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg"
    />
  );

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(query)
    navigate('/s/' + query.split(' ').join('-'));
    console.log('hi')
  }

  return (
    <nav className="nav">
      <div className="logo">{unsplashIcon}</div>

      <div className="search-box">
        <form
          className="search-box-container"
          style={{ width: "100%" }}
          onSubmit={handleSubmit}
        >
          {searchIcon}
          <input
            type="text"
            placeholder="Search photos"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </form>
      </div>
      <ul className="lists">
        <li>
          <a className="list" href="">
            Explore
          </a>
        </li>
        <li>
          <a className="list" href="">
            Advertise
          </a>
        </li>
        <li>
          <a className="list" href="">
            Blog
          </a>
        </li>
      </ul>
      <div className="line"></div>
      <div className="authLinks">
        <a
          href="https://unsplash.com/login"
          className="authLink"
        >
          Log in
        </a>
        /
        <a
          href="https://unsplash.com/join"
          className="authLink"
        >
          Sign up
        </a>
      </div>
      <div className="submit">
        sumbit
      </div>
      <div className="submit_a_photo">
        submit a photo
      </div>
      <div
        {...triggerProps}
        onClick={() => setOpen(!isOpen)}
        className="menu"
      >
        {menuIcon}
      </div>

      {isOpen &&
        renderLayer(
          <div
            {...layerProps}
            style={{
              ...layerProps.style,
              width: 100,
              height: 350,
              background: "white",
              border: "0.01px solid black",
              borderRadius: "3px",
              zIndex: "2000"
            }}
          >
            this is something this is something this is something this is
            something
            <Arrow
              {...arrowProps}
              size={6}
              roundness={0}
              angle={45}
              borderWidth={0.7}
              borderColor="#000"
            />
          </div>
        )}
    </nav>
  );
};

export default Nav;