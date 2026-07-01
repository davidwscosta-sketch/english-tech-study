interface Stat {
  label: string;
  value: string | number;
  emoji: string;
}

interface StatsBarProps {
  streak: number;
  mastered: number;
  total: number;
  due: number;
}

export function StatsBar({ streak, mastered, total, due }: StatsBarProps) {
  const stats: Stat[] = [
    { label: 'Sequência', value: `${streak} ${streak === 1 ? 'dia' : 'dias'}`, emoji: '🔥' },
    { label: 'Dominadas', value: `${mastered}/${total}`, emoji: '🏆' },
    { label: 'Para revisar', value: due, emoji: '🔁' },
  ];

  return (
    <ul className="grid grid-cols-3 gap-3">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <span className="block text-2xl">{stat.emoji}</span>
          <span className="mt-1 block text-lg font-bold text-slate-900 dark:text-slate-100">
            {stat.value}
          </span>
          <span className="block text-xs text-slate-500 dark:text-slate-400">{stat.label}</span>
        </li>
      ))}
    </ul>
  );
}
