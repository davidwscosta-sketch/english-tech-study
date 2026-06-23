import { useState } from 'react';
import type { Deck } from './types';
import { decks, getDeck } from './data/decks';
import { dueCards } from './lib/progress';
import { useDarkMode } from './hooks/useDarkMode';
import { useProgress } from './hooks/useProgress';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { StudySession } from './components/StudySession';
import { QuizSession } from './components/QuizSession';
import { StatsScreen } from './components/StatsScreen';

type View =
  | { name: 'home' }
  | { name: 'study'; deckId: string }
  | { name: 'quiz'; deckId: string }
  | { name: 'review' }
  | { name: 'stats' };

const allCards = decks.flatMap((deck) => deck.cards);

function App() {
  const { dark, toggle } = useDarkMode();
  const { state, recordReview, reset } = useProgress();
  const [view, setView] = useState<View>({ name: 'home' });

  const goHome = () => setView({ name: 'home' });

  const renderView = () => {
    switch (view.name) {
      case 'study': {
        const deck = getDeck(view.deckId);
        if (!deck) return null;
        return <StudySession deck={deck} onExit={goHome} onReview={recordReview} />;
      }
      case 'quiz': {
        const deck = getDeck(view.deckId);
        if (!deck) return null;
        return <QuizSession deck={deck} pool={allCards} onExit={goHome} onReview={recordReview} />;
      }
      case 'review': {
        const due = dueCards(decks, state, Date.now());
        const reviewDeck: Deck = {
          id: 'review',
          title: 'Revisão do dia',
          emoji: '🔁',
          description: 'Cartas para revisar hoje.',
          cards: due,
        };
        return <StudySession deck={reviewDeck} onExit={goHome} onReview={recordReview} />;
      }
      case 'stats':
        return (
          <StatsScreen
            decks={decks}
            progress={state}
            onExit={goHome}
            onReset={() => {
              reset();
              goHome();
            }}
          />
        );
      case 'home':
      default:
        return (
          <HomeScreen
            decks={decks}
            progress={state}
            onStudy={(deckId) => setView({ name: 'study', deckId })}
            onQuiz={(deckId) => setView({ name: 'quiz', deckId })}
            onReview={() => setView({ name: 'review' })}
            onStats={() => setView({ name: 'stats' })}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Header dark={dark} onToggleTheme={toggle} />
      <main className="mx-auto max-w-3xl px-4 py-6">{renderView()}</main>
    </div>
  );
}

export default App;
