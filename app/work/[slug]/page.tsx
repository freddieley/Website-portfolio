import {notFound} from "next/navigation";
import Link from "next/link";
import {projects,getProject} from "../../projects";
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=getProject(slug);if(!p)notFound();return <main className={"concept-site "+p.accent}>
<header><Link href="/" className="brand">BLUO<span>•</span></Link><Link href="/" className="back">← All work</Link></header>
<section className="concept-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.38)),url("${p.heroImage}")`}}><div className="concept-nav"><strong>{p.title.toUpperCase()}</strong><span>{p.pages.join(" / ")}</span><a href="#contact">{p.cta} ↗</a></div><div className="concept-hero-copy"><span className="concept-eyebrow">{p.eyebrow}</span><h1>{p.title}</h1><p>{p.tagline}</p><a className="concept-hero-cta" href="#contact">{p.cta} <span>↗</span></a></div><div className="concept-stats">{p.stats.map((s,i)=><span key={i}>{s}</span>)}</div></section>
<section className="experience-intro"><div><span className="detail-label">THE IDEA</span><h2>{p.tagline}</h2></div><div><p>{p.description}</p><div className="feature-list">{p.features.map(x=><span key={x}>{x}</span>)}</div></div></section>
<section className="image-strip">{p.gallery.map((image,i)=><div className={"gallery-image gallery-"+i} key={image} style={{backgroundImage:`url("${image}")`}}><span>0{i+1}</span></div>)}</section>
<section className="proof-section"><div><span className="detail-label">BUILT AROUND THE CUSTOMER</span><h2>Everything has<br/><em>a job to do.</em></h2></div><div className="proof-list">{p.proof.map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><b>↗</b></div>)}</div></section>
<section className="testimonial"><span>THE DESIGN PRINCIPLE</span><blockquote>“{p.testimonial}”</blockquote><small>— {p.title.toUpperCase()} / CONCEPT PROJECT</small></section>
<section id="contact" className="concept-cta"><div><span>READY FOR SOMETHING LIKE THIS?</span><h2>Let's make your<br/><em>business look good.</em></h2></div><a href="https://bluo.co.uk/#contact">{p.cta} with Bluo ↗</a></section>
<footer><span>BLUO / CONCEPT PROJECT</span><Link href="/">View all work ↗</Link></footer>
</main>}
