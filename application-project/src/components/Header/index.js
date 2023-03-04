import "./styles.scss";

export default function Header({ signin, setShowSignin }) {
  const handleSignin = () => {
    signin ? setShowSignin(false) : setShowSignin(true);
  };

  return (
    <div className="header-component">
      <h1>BloomScroll</h1>
      <button onClick={() => handleSignin(true)} className="signup-button">
        Sign Up
      </button>
    </div>
  );
}
