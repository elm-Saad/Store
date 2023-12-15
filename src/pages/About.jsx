import hero1 from '../assets/4.webp'


const About = ()=>{
    return (
        <section className="min-h-[25rem] flex items-center justify-center">
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <img src={hero1} className="max-w-sm h-72 rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6 max-w-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              </div>
            </div>
          </div>
        </section>
    )
}


export default About