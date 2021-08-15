import './App.css';
import Profile from './profil/Profile';
import Statistic from './statistic/Statistic';
import Friends from './friends/FriendList';
import TransactionHistory from './transaktion/TransactionHistory';
import statData from './statistic/statistics.json';
import user from './profil/user.json';
import FriendsDB from './friends/friends.json';
import transaction from './transaktion/transaction.json';

function App() {
  return (
     <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistic
        title="Upload stats" stats={statData} />
      
      <Friends friends={FriendsDB} />

      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;