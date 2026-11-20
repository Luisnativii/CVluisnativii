const contributionsUrl = 'https://github.com/users/Luisnativii/contributions';

export default async function handler(_request, response) {
  response.setHeader('Content-Type', 'application/json; charset=utf-8');

  try {
    const upstream = await fetch(contributionsUrl, {
      headers: { 'Accept-Language': 'en-US' },
      signal: AbortSignal.timeout(7000),
    });
    if (!upstream.ok) throw new Error('GitHub unavailable');

    const html = await upstream.text();
    const labels = new Map();
    for (const [, id, label] of html.matchAll(/<tool-tip\b[^>]*\bfor="(contribution-day-component-[^"]+)"[^>]*>\s*([^<]+)<\/tool-tip>/g)) {
      const count = /^(\d[\d,]*|No) contributions?\b/.exec(label.trim())?.[1];
      if (count) labels.set(id, count === 'No' ? 0 : Number(count.replaceAll(',', '')));
    }

    const days = [];
    for (const [cell] of html.matchAll(/<td\b[^>]*\bdata-date="\d{4}-\d{2}-\d{2}"[^>]*>/g)) {
      const date = /\bdata-date="([^"]+)"/.exec(cell)?.[1];
      const id = /\bid="([^"]+)"/.exec(cell)?.[1];
      const level = /\bdata-level="([0-4])"/.exec(cell)?.[1];
      const count = labels.get(id);
      if (date && level !== undefined && Number.isFinite(count)) {
        days.push({ date, level: Number(level), count });
      }
    }
    if (days.length < 350) throw new Error('Incomplete contribution calendar');

    days.sort((a, b) => a.date.localeCompare(b.date));
    response.setHeader('Cache-Control', 'public, max-age=300, s-maxage=3600, stale-while-revalidate=86400');
    response.end(JSON.stringify({ days }));
  } catch {
    response.statusCode = 502;
    response.setHeader('Cache-Control', 'no-store');
    response.end(JSON.stringify({ error: 'Contribution calendar unavailable' }));
  }
}
