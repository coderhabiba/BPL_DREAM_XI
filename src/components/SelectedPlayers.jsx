import { useNavigate } from 'react-router-dom';
const SelectedPlayers = ({ choosePlayer, removePlayer }) => {
  const navigate = useNavigate();

  const handlePageClick = () => {
    navigate('/')
  };
  return (
    <div className="flex flex-col gap-6 container mx-auto">
      {choosePlayer.map((player, index) => (
        <div key={index} className="container mx-auto font-sora">
          <div className="card rounded-2xl border border-[#1313131a]">
            <div className="p-6 flex justify-between items-center">
              <div className="flex items-center gap-6">
                <img
                  className="w-20 h-20 rounded-2xl"
                  src={player.player_img}
                  alt={player.player_name}
                />
                <div className="flex flex-col gap-3">
                  <h2 className="card-title text-2xl font-semibold text-[#131313]">
                    {player.player_name}
                  </h2>
                  <p className="text-[16px] text-[#13131399]">
                    {player.playing_role}
                  </p>
                </div>
              </div>
              <button onClick={() => removePlayer(player)} className="w-6 h-6">
                <img
                  className="w-full h-full"
                  src="https://i.ibb.co.com/FqCxX5T1/delete.png"
                  alt="delete-btn"
                />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="border border-[#e7fe29] p-2 lg:w-[12.1%] w-full rounded-2xl">
        <button
          onClick={handlePageClick}
          className={`py-3.5 px-5 rounded-[12px] w-full 
                bg-[#e7fe29] hover:bg-[#727203] hover:text-white text-[16px] font-bold text-[#131313] transition ease-in-out duration-[1s] cursor-pointer`}
        >
          Add more player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
