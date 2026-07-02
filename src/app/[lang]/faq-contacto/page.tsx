import{notFound}from'next/navigation';import{getDictionary,hasLocale}from'../../../dictionaries';
export default async function Page({params}:
    {params:Promise<{lang:string}>})
        {const{lang}=await params;
            if(!hasLocale(lang))notFound();const d=(await getDictionary(lang)).faq;
            return<div style={{background:'#f1f5f9',padding:'4rem 2rem'}}>
                    <div className="container" 
                        style={{maxWidth:800,background:'white',padding:'3rem',borderRadius:16}}><h1>{d.title}</h1>{d.items.map((x,i)=><section key={i}><h2>{x[0]}</h2><p>{x[1]}</p></section>)}<section><h2>{d.contact}</h2><p>{d.contactCopy}</p><strong>soporte@universetcg.com</strong><p>{d.response}</p></section>
                    </div>
                </div>
        }
