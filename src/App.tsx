import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';
function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Character Counter</h1>
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
    </div>
  );
}
export default App;
