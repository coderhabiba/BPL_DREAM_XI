import { toast } from "react-toastify";

function PlayerCard({ player, availableBalance, setAvailableBalance,setSelectCount,choosePlayer,setChoosePlayer }) {
  const playerPrice = parseInt(player.price_usd.split('+').join('').split(',').join(''));
   const isSelected = choosePlayer.some(
     p => p.player_name === player.player_name
   );
  
  return (
    <div className="container mx-auto flex lg:flex-row flex-col justify-around">
      <div className="rounded-2xl border border-[#1313131a] p-6">
        <div className="lg:w-[450px] lg:h-[300px] ">
          <img
            className="w-full h-full rounded-2xl"
            src={player.player_img}
            alt={player.player_name}
          />
        </div>

        <div>
          <div className="flex items-center gap-1">
            <div className="ml-[-7px] w-7 h-7">
              <img
                className="w-full h-full"
                src={player.player_icon}
                alt="player"
              />
            </div>
            <h5 className="text-[#131313] text-xl font-semibold">
              {player.player_name}
            </h5>
          </div>

          <div className="border-b border-b-gray-300 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-flag"></i>
              <p className="text-[#131313] opacity-[0.5] text-[16px]">
                {player.country}
              </p>
            </div>
            <button className="text-[#131313] text-sm py-2 px-4 rounded-lg bg-[#1313130d]">
              {player.playing_role}
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <p className="font-bold">Ratings :</p>
            <span className="text-sm font-semibold">{player.rating}</span>
          </div>

          <div className="flex items-center justify-between mt-5">
            <p className="font-semibold text-[16px] text-[#131313]">
              Price : ${player.price_usd}
            </p>
            <button
              disabled={isSelected}
              onClick={() => {
                if (playerPrice > availableBalance) {
                  toast('Not enough coins!!');
                  return;
                }
                if (choosePlayer.length >= 6) {
                  toast("You can't select more than 6 players");
                  return;
                }
                setAvailableBalance(availableBalance - playerPrice);
                setSelectCount(prev => prev + 1);
                setChoosePlayer([...choosePlayer, player]);
              }}
              className={`btn text-sm rounded-lg font-medium py-2 px-4 ${
                isSelected
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'text-[#131313]'
              }`}
            >
              {isSelected ? 'Selected' : 'Choose Player'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;