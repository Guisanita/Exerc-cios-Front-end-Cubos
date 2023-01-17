import './App.css';
import Profile from './components/profile';
import Card from './components/Card';
import People from './data/people';

function App() {
  return (
    <div className="container">
      {
        People.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            socialMedia={person.socialMedia}
            followers={person.followers}
            following={person.following}>
            <Profile
              profile={person.profile}
            />
          </Card>

        ))
      }
    </div >
  );
}

export default App;
