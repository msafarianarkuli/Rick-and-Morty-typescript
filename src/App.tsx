import { Routes, Route } from 'react-router-dom';
import Layout from './screens/Layout';
import CharacterList from './components/CharacterList';
import SingleCharacter from './components/SingleCharacter';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CharacterList />} />
        <Route
          path="character/:characterId"
          element={<SingleCharacter />}
        />
      </Route>
    </Routes>
  );
}

export default App;
