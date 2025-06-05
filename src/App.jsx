import "./App.css";
import XFollowCard from "./XFollowCard.jsx";

const users = [
  {
    userNameX: "chirii_j",
    name: "Jesus David Chirinos",
    userNameGithub: "jesuschirii",
  },
  {
    userNameX: "midudev",
    name: "Miguel Angel Davila",
    userNameGithub: "midudev",
  },
];

function App() {
  return (
    <>
      {users.map((user) => {
        const { userNameX, name, userNameGithub } = user;

        return (
          <XFollowCard
            key={userNameX}
            userNameX={userNameX}
            name={name}
            userNameGithub={userNameGithub}
          />
        );
      })}
    </>
  );
}
export default App;
