import './App.css';
import Profile from './component/profil/Profile';
import Statistic from './component/statistic/Statistic';
import Friends from './component/friends/FriendList';
import TransactionHistory from './component/transaktion/TransactionHistory';
import statData from './json/statistics.json';
import user from './json/user.json';
import friendsDB from './json/friends.json';
import transaction from './json/transaction.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={statData} />

      <Friends friends={friendsDB} />

      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
