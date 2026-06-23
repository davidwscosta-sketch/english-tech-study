import { useState } from 'react';
import { decks, getDeck } from './data/decks';
import { useDarkMode } from './hooks/useDarkMode';
import { Header } from './components/Header';
import { DeckList } from './components/DeckList';
import { StudySession } from './components/StudySession';

function App() {
  const { dark, toggle } = useDarkMode();
  const [activeDeckId, setActiveDeckId] = useState<string | null>(null);

  const activeDeck = activeDeckId ? getDeck(activeDeckId) : undefined;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Header dark={dark} onToggleTheme={toggle} />
      <main className="mx-auto max-w-3xl px-4 py-6">
        {activeDeck ? (
          <StudySession deck={activeDeck} onExit={() => setActiveDeckId(null)} />
        ) : (
          <DeckList decks={decks} onSelect={setActiveDeckId} />
        )}
      </main>
    </div>
  );
}

export default App;
