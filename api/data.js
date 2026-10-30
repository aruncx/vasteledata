// Vercel Serverless Function: Secure Google Sheet Data Proxy
// Hides Google Sheet ID/URL from client-side network inspectors and blocks AI scrapers

export default async function handler(req, res) {
  // Disallow non-GET methods
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Security Headers for AI crawlers & bot prevention
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, noai, noimageai');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  // Sheet ID can be stored securely in Vercel Environment Variables: GOOGLE_SHEET_ID
  const SHEET_ID = process.env.GOOGLE_SHEET_ID || '13GzUszlXnNx5fq3gJKk8wpHq_6S3NN8dF8KNjxjJJzw';
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&_=${Date.now()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(502).json({ error: 'Failed to fetch from Google Sheets' });
    }
    const csv = await response.text();
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    return res.status(200).send(csv);
  } catch (err) {
    return res.status(500).json({ error: 'Proxy server error' });
  }
}
