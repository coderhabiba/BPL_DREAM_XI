
import PlayerCard from './PlayerCard';
const AvailablePlayers = ({
  playerUrl,
  availableBalance,
  setAvailableBalance,
  setSelectCount,
  choosePlayer,
  setChoosePlayer,
}) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 font-sora">
      {playerUrl.map((player, index) => (
        <PlayerCard
          key={index}
          player={player}
          choosePlayer={choosePlayer}
          setChoosePlayer={setChoosePlayer}
          setSelectCount={setSelectCount}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
        />
      ))}
    </div>
  );
};

export default AvailablePlayers;
