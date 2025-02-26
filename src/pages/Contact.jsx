import { Fragment } from 'react';
import img_contact from '@assets/images/contact-us.png';

function Contact() {
  return (
    <Fragment>
      <section className="contact">
        <div className="contact__header">
          <h3 className="content__title-suptext">Contact With Us</h3>
          <h1 className="content__title">You can ask us questions</h1>
          <p className="content__subtext">
            Contact us for all your questions and opinions, or you can solve your
            <br /> problems in a shorter time with our contact offices.
          </p>
        </div>
        <div className="contact__information">
          <div className='content__information'>
            <image src={img_contact} alt="Contact with us" />
          </div>
          <form className="contact__form">

          </form>
        </div>
      </section>
    </Fragment>
  );
}

export default Contact;
