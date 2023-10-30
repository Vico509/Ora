import React from 'react';
import { useNavigate } from "react-router-dom";



const Home = () => {

  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className='container'>
        <section>
          <div className='main wrapper'>
            <div className='row'>
              <div className="col-lg-5 col-md-6">
                <h1>Explore our Powerful API</h1>
                <p>Access a vast collection of Bible versions, translations, and languages, providing an extensive array of texts for your applications.</p>
                <br />
                <button onClick={() => handleClick('/apidocumentation')}>Get Started</button>
              </div>

            </div>

          </div>

        </section>
        <section>
          <div className='second-part'>

            <div className="row">
              <h2>Features</h2>

              <div className="card">
                <div className='card-inner'>

                </div>
                <br />
                <h6>Multi-Version Support</h6>
                <p>Include popular Bible translations such as King James Version (KJV), New International Version (NIV), English Standard Version (ESV), etc.</p>
              </div>

              <div className="card">
                <div className='card-inner'>
                </div>
                <br />
                <h6>Search and Navigation</h6>

                <p>Enable users to search for specific verses, chapters, or keywords.</p>
              </div>

            </div>
          </div>

        </section>
        <section>
          <div className='third-part'>
            <div className="row">
              <h2>About Us</h2>
              <p>Welcome to our ORA, where ancient wisdom meets modern technology. We are passionate about making the sacred scriptures accessible to people across the globe. Our application is not just a gateway to the Bible; it's a transformative experience that empowers users with divine knowledge, and we are proud to introduce our most prized feature — a robust and versatile API.</p>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default Home