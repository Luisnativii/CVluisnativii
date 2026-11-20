import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profile, type Language } from './data';

type Day = { date: string; level: number; count: number };
const dayMs = 86_400_000;
const copy = {
  es: { loading: 'Cargando contribuciones…', unavailable: 'El calendario no está disponible en este momento.', total: 'contribuciones en', active: 'días con actividad', graph: 'Mapa de contribuciones por día', less: 'Menos', more: 'Más', profile: 'Ver @Luisnativii en GitHub' },
  en: { loading: 'Loading contributions…', unavailable: 'The calendar is currently unavailable.', total: 'contributions in', active: 'active days', graph: 'Daily contributions heatmap', less: 'Less', more: 'More', profile: 'View @Luisnativii on GitHub' },
};

export function GitHubActivity({ language }: { language: Language }) {
  const [days, setDays] = useState<Day[]>();
  const [unavailable, setUnavailable] = useState(false);
  const text = copy[language];

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch('/api/github-contributions', { signal: controller.signal });
        if (!response.ok) throw new Error('Calendar unavailable');
        const data = await response.json();
        if (!Array.isArray(data.days) || data.days.length === 0) throw new Error('Calendar is empty');
        setDays(data.days);
      } catch {
        if (!controller.signal.aborted) setUnavailable(true);
      }
    }

    void load();
    return () => controller.abort();
  }, []);

  const locale = language === 'es' ? 'es-SV' : 'en';
  const monthFormat = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' });
  const dateFormat = new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' });
  const numbers = new Intl.NumberFormat(locale);
  const lastDate = days?.[days.length - 1]?.date;
  const year = lastDate?.slice(0, 4);
  const yearDays = days?.filter(day => day.date.slice(0, 4) === year);
  const total = yearDays?.reduce((sum, day) => sum + day.count, 0);
  const activeDays = yearDays?.filter(day => day.count > 0).length ?? 0;
  const firstDate = year ? new Date(`${year}-01-01`) : undefined;
  const start = firstDate ? firstDate.getTime() - firstDate.getUTCDay() * dayMs : 0;
  const datePosition = (date: Date) => Math.floor((date.getTime() - start) / (dayMs * 7)) + 1;

  return (
    <div className="github-card">
      <div className="github-summary" role="status">
        {total !== undefined ? (
          <>
            <div className="github-stat"><strong>{numbers.format(total)}</strong><span>{text.total} {year}</span></div>
            <div className="github-stat"><strong>{numbers.format(activeDays)}</strong><span>{text.active}</span></div>
          </>
        ) : unavailable ? text.unavailable : text.loading}
      </div>
      {yearDays && (
        <div className="github-scroll" tabIndex={0} role="region" aria-label={text.graph}>
          <div className="github-calendar" role="img" aria-label={text.graph}>
            {yearDays.map(({ date, level, count }) => {
              const day = new Date(date);
              const column = datePosition(day);
              return (
                <div key={date} className="github-calendar-day" style={{ gridColumn: column, gridRow: day.getUTCDay() + 2 }}>
                  {day.getUTCDate() <= 7 && day.getUTCDay() === 0 && (
                    <span className="github-month">{monthFormat.format(day)}</span>
                  )}
                  <span className="github-cell" data-level={level} title={`${dateFormat.format(day)} · ${numbers.format(count)}`} />
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="github-footer">
        <a className="card-link" href={profile.github} target="_blank" rel="noreferrer">
          {text.profile} <ArrowUpRight size={16} />
        </a>
        {yearDays && (
          <div className="github-legend" aria-hidden="true">
            {text.less}
            {[0, 1, 2, 3, 4].map(level => <span className="github-cell" data-level={level} key={level} />)}
            {text.more}
          </div>
        )}
      </div>
    </div>
  );
}
