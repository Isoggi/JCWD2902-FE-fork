import INavbar from "../interfaces/navbar.props";

export default function Navbar(props: INavbar) {
  return (
    <>
      <div className="navbar">
        {props.logo}{" "}
        <div>
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/Profile/My">My Profile</a>
        </div>
      </div>
    </>
  );
}
