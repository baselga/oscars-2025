import { useMemo } from "react";
import { DATA, PlayerKeys, PLAYERS } from "../../data";

// Votes es un objeto que tiene como claves los valores de PlayerKeys y como valores la cantidad de votos que recibió cada jugador
type Votes = {
  [key in PlayerKeys]: number;
};

function getWinner() {
  const votes: Votes = {} as Votes;
  DATA.forEach((category) => {
    category.nominees.forEach((nominee) => {
      nominee.votes.forEach((vote) => {
        if (nominee.winner) {
          votes[vote] = votes[vote] ? votes[vote] + 1 : 1;
        }
      });
    });
  });

  return votes;
}

export const Winner = () => {
  const votes = useMemo(() => getWinner(), []);

  const winnerKey = Object.keys(votes).reduce((a, b) =>
    votes[a as PlayerKeys] > votes[b as PlayerKeys] ? a : b
  ) as PlayerKeys;  

  return (
    <div className="py-2 px-4 w-full max-w-5xl bg-amber-950 rounded-lg mb-8">
      <h2 className="text-4xl font-bold text-amber-400 text-center pb-2">
        ¡¡Ganador!!
      </h2>
      <div className="flex flex-wrap gap-4 py-2 items-center justify-center">
        <img
          src={PLAYERS[winnerKey].photo}
          className="h-80 w-80 object-contain  rounded-sm"
        />
        <div className="flex flex-col gap-3 flex-auto">
          {Object.keys(votes).map((key) => (
            <div
              key={key}
              className={`flex text-2xl gap-4 items-center font-bold ${
                key === winnerKey ? "text-amber-400" : "text-white"
              }`}
            >
              <img
                src={PLAYERS[key as PlayerKeys].photo}
                className="w-15 h-15 object-cover"
              />
              {PLAYERS[key as PlayerKeys].name}
              <span>{votes[key as PlayerKeys]}</span>
              {key === winnerKey && <span>🏆</span>}              
            </div>
          ))}          
        </div>
      </div>
    </div>
  );
};
