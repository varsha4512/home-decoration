import homeFirst from '../assets/homelast.jpg';

const scrollHandler = (elmRef) => {
  console.log(elmRef.current);
  window.scrollTo({
      top: elmRef.current.offsetToTop, behavior: "smooth"
  });
}

function Home () {

    return(
      <>
          <main className="hero__container">
        
        <section className="hero__subcontainer">
            <div className="hero__image__container">
            <img src={homeFirst} alt="Home first"  className="hero__image"/>
            <div className="text-block">
              <p>Dream home begin with dream designs</p>
            </div>
            </div>
            <div className="hero__description">
                <h1 className="hero__text">Dream home begin with dream designs</h1>
                
            </div>
        </section>
        <section id="about">

        <div className="about-container">
      <h1 className="about-container-h1">About Us</h1>
      <p className="about-container-p">We are a team of interior design experts who are passionate about creating beautiful and functional living spaces.</p>
      <p className="about-container-p">Our mission is to help homeowners and renters transform their homes into inviting and comfortable spaces that reflect their unique personalities and lifestyles.</p>
      <p className="about-container-p">Whether you need help with a small renovation project or a complete home makeover, we are here to guide you every step of the way.</p>
      <div className="social-links">
        <a href="https://github.com/your-github-account"><i className="fab fa-github"></i></a>
        <a href="https://facebook.com/your-facebook-account"><i className="fab fa-facebook"></i></a>
        <a href="https://pinterest.com/your-pinterest-account"><i className="fab fa-pinterest"></i></a>
        <a href="https://instagram.com/your-instagram-account"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
        </section>

        <section>
       
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to know more about our services, please don't hesitate to get in touch with us.</p>
        <ul>
          <li><strong>Phone:</strong> +918197876217</li>
          <li><strong>Email:</strong> varshashekar45@gmail.com</li>
          <li><strong>Address:</strong> 1st sector agara, HSR Layout, Bangalore.</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className='contact-form-content'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email" required />
          

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Write your message here" required></textarea>

          <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
        
    
        </section>
    </main>

        
        </>
    )
}

export default Home;