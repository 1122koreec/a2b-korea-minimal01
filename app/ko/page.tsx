export default function Page() {
  return (
    <main style={{ padding: 20, fontFamily: 'system-ui' }}>
      <h1>A2B Korea — KO</h1>
      <p>Минимальный тестовый проект Next.js. Страница: /ko</p>
      <nav style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <a href="/ko">KO</a>
        <a href="/en">EN</a>
        <a href="/ru">RU</a>
      </nav>
    </main>
  );
}
