import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "../../projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProject(slug);

  if (!p) notFound();

  return (
    <main className={"concept-site " + p.accent}>
      <header>
        <Link href="/" className="brand">BLUO<span>•</span></Link>
        <Link href="/" className="back">← All work</Link>
      </header>

      <section className="concept-hero">
        <div className="concept-nav">
          <strong>{p.title.toUpperCase()}</strong>
          <span>{p.pages.join(" / ")}</span>
          <a href="#mock">{p.cta} ↗</a>
        </div>
        <div className="concept-hero-copy">
          <span className="concept-eyebrow">{p.eyebrow}</span>
          <h1>{p.title}</h1>
          <p>{p.tagline}</p>
        </div>
        <div className="concept-stats">
          {p.stats.map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </section>

      <section id="mock" className="concept-preview">
        <div className="preview-browser">
          <div className="preview-bar">
            <i /><i /><i />
            <small>{p.slug}.concept</small>
          </div>
          <div className="preview-site">
            {p.slug === "northline-barbers" ? (
              <>
                <div className="barber-top">
                  <span>THE CUT IS THE POINT.</span>
                  <strong>BOOK<br />YOUR<br />CHAIR.</strong>
                  <button>{p.cta} ↗</button>
                </div>
                <div className="barber-gallery">
                  <div className="cut cut-one">FADE<br /><b>01</b></div>
                  <div className="cut cut-two">TEXTURE<br /><b>02</b></div>
                  <div className="cut cut-three">CLASSIC<br /><b>03</b></div>
                </div>
                <div className="barber-bottom">
                  <span>18 LONDON ROAD</span>
                  <span>MON—SUN</span>
                  <span>09:00—19:00</span>
                </div>
              </>
            ) : p.slug === "ember-table" ? (
              <>
                <div className="restaurant-top">
                  <span>EMBER / TABLE</span>
                  <span>WINCHESTER · 2026</span>
                </div>
                <div className="restaurant-hero">
                  <div>
                    <small>THIS WEEK</small>
                    <h2>Come hungry.<br /><em>Stay awhile.</em></h2>
                    <button>{p.cta} ↗</button>
                  </div>
                  <div className="dish">SEASONAL<br /><b>MENU</b></div>
                </div>
                <div className="restaurant-menu">
                  <span>SMALL PLATES</span>
                  <strong>Charred leeks · sourdough · smoked butter</strong>
                  <span>MAINS</span>
                  <strong>Roast cod · embered greens · shellfish sauce</strong>
                </div>
              </>
            ) : (
              <>
                <div className="trade-top">
                  <span>FORGEWORKS / LOCAL CONTRACTOR</span>
                  <strong>{p.cta} ↗</strong>
                </div>
                <div className="trade-hero">
                  <div>
                    <small>BUILT PROPERLY.</small>
                    <h2>Work you can<br /><em>stand behind.</em></h2>
                    <p>Extensions · Roofing · Groundworks · Repairs</p>
                  </div>
                  <div className="project-proof">
                    <b>PROJECT 024</b>
                    <span>Before → After</span>
                    <strong>+32%</strong>
                    <small>ENQUIRY CONVERSION</small>
                  </div>
                </div>
                <div className="trust-row">
                  <span>✓ FULLY INSURED</span>
                  <span>✓ LOCAL TEAM</span>
                  <span>✓ FREE QUOTES</span>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="concept-detail">
        <div>
          <span className="detail-label">THE IDEA</span>
          <h2>{p.tagline}</h2>
        </div>
        <div>
          <p>{p.description}</p>
          <div className="feature-list">
            {p.features.map((x) => <span key={x}>{x}</span>)}
          </div>
        </div>
      </section>

      <footer>
        <span>BLUO / CONCEPT PROJECT</span>
        <a href="mailto:freddie.ley@icloud.com?subject=Website%20project%20enquiry">
          {p.cta} with Bluo ↗
        </a>
      </footer>
    </main>
  );
}
