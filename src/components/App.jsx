import '../css/index.css';
import '../css/App.css';
import Banner from './Banner';
import Navbar from './Navbar';
import Subscribe from './Subscribe';
import Footer from './Footer';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';
import { Suspense, useState } from 'react';
import players from '../../public/players.json';
import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

// Toggle buttons component
const PlayerToggle = ({ choosePlayer }) => {
  const location = useLocation(); // current path

  return (
    <div className="join">
      <Link
        to="/"
        className={`btn join-item ${
          location.pathname === '/' ? 'bg-[#E7FE29]' : ''
        } lg:px-[30px] px-[10px] lg:py-[14px] py-1 border border-[#1313131A] rounded-l-xl font-sora lg:text-[16px] text-xs lg:font-bold font-normal text-[#131313] transition ease-in-out duration-[0.5s] cursor-pointer`}
      >
        Available
      </Link>
      <Link
        to="/selected"
        className={`btn join-item ${
          location.pathname === '/selected' ? 'bg-green-500 text-white' : ''
        } lg:px-5 px-2 lg:py-[14px] py-1 border border-[#1313131A] rounded-r-xl font-sora font-light lg:text-[16px] text-xs text-[#13131399] transition ease-in-out duration-[0.5s] cursor-pointer`}
      >
        Selected ({choosePlayer.length})
      </Link>
    </div>
  );
};

function App() {
  const [availableBalance, setAvailableBalance] = useState(50000000);
  const [selectCount, setSelectCount] = useState(0);
  const [choosePlayer, setChoosePlayer] = useState([]);
  const [playerUrl] = useState(players);

  const removePlayer = p => {
    const playerPrice = parseInt(
      p.price_usd.split('+').join('').split(',').join('')
    );
    setAvailableBalance(prev => prev + playerPrice);

    const filteredPlayer = choosePlayer.filter(
      ply => ply.player_name !== p.player_name
    );
    setChoosePlayer(filteredPlayer);
  };

  return (
    <Router>
      <Navbar
        availableBalance={availableBalance}
        setAvailableBalance={setAvailableBalance}
      />
      <Banner />

      <div className="flex items-center justify-between container mx-auto mt-24 mb-10">
        <h3 className="font-sora text-[#131313] lg:text-[28px] lg:font-bold font-semibold">
          <Routes>
            <Route path="/" element={<>Available Players</>} />
            <Route
              path="/selected"
              element={
                <>
                  Selected Players (
                  <span id="selected-count">{choosePlayer.length}</span>/6)
                </>
              }
            />
          </Routes>
        </h3>

        <PlayerToggle choosePlayer={choosePlayer} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <span className="loading loading-spinner text-warning"></span>
              }
            >
              <AvailablePlayers
                choosePlayer={choosePlayer}
                setChoosePlayer={setChoosePlayer}
                selectCount={selectCount}
                setSelectCount={setSelectCount}
                availableBalance={availableBalance}
                setAvailableBalance={setAvailableBalance}
                playerUrl={playerUrl}
              />
            </Suspense>
          }
        />
        <Route
          path="/selected"
          element={
            <SelectedPlayers
              playerUrl={playerUrl}
              removePlayer={removePlayer}
              choosePlayer={choosePlayer}
              setChoosePlayer={setChoosePlayer}
            />
          }
        />
      </Routes>

      <div className="relative">
        <Subscribe />
      </div>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
