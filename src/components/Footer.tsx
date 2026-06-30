type FooterText={service:string;terms:string;privacy:string;refund:string;faq:string;copyright:string;note:string};
export default function Footer({lang,dictionary:d}:{lang:string;dictionary:FooterText}){return <footer style={{backgroundColor:'#0a215a',color:'white',padding:'4rem 0 2rem'}}><div className="container" style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'3rem'}}>
  {/*<div style={{display:'flex',gap:'1.5rem'}}>{['Instagram','Twitch','X','YouTube'].map(x=><div key={x} aria-label={x} style={{width:40,height:40,borderRadius:'50%',background:'rgba(255,255,255,.2)',display:'grid',placeItems:'center'}}>{x[0]}</div>)}</div>*/}
  <div style={{display:'flex',gap:'2rem',flexWrap:'wrap',justifyContent:'center',borderTop:'1px solid rgba(255,255,255,.2)',paddingTop:'2rem',width:'100%'}}><a href="#">{d.service}</a><a href="#">{d.terms}</a><a href="#">{d.privacy}</a><a href={`/${lang}/politica-devolucion`}>{d.refund}</a><a href={`/${lang}/faq-contacto`}>{d.faq}</a></div>
  <p style={{fontSize:'.8rem',opacity:.7,textAlign:'center'}}>{d.copyright}<br/>{d.note}</p>
 </div></footer>}
