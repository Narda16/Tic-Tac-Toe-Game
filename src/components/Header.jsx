import gameLogo from "../assets/images/game-logo.png";

export default function Header() {
  return (
    <header>
      <img src={gameLogo} alt="Logo tic tac toe game board" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
}
