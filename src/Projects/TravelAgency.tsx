import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faPinterestSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import M from 'materialize-css';

const TravelAgency = () => {
  
  useEffect(() => {
    M.Sidenav.init(
      document.querySelectorAll('#TravelAgencySideNav'),
      { edge : 'right' }
    );
    M.Slider.init(
      document.querySelectorAll('.slider'),
      {
        height : isSmall() ? 240 : 480,
        indicators : false
      }
    );
    M.Autocomplete.init(
      document.querySelectorAll('#TravelAgencySearchInput'),
      { data : {
        Auckland : null,
        Coromandel : null,
        Northland : null,
        Tauranga : null,
        Taupo : null,
        Rotorua : null,
        Whagarei : null,
        "New Plymouth" : null,
        "Hawk's Bay" : null,
        "Te Urewera" : null,
        Wellington : null
      }}
    );
    M.Materialbox.init(
      document.querySelectorAll('.TravelAgencyBoxed'),
      {}
    );
    M.ScrollSpy.init(
      document.querySelectorAll('.TravelAgencySpy'),
      {}
    );
  });
  
  return (
    <div className="container-breakout">
      <nav className="navbar-fixed TravelAgencySpy teal" id="TravelAgencyHome">
        <div className="container nav-wrapper">
          <a className="brand-logo" href="/projects/TravelAgency" style={{whiteSpace:"nowrap"}}>Travel Agency</a>
          <a className="hide-on-med-and-up right sidenav-trigger" data-target="TravelAgencySideNav" href="#!">
            <i className="material-icons">menu</i>
          </a>
				  <ul id="TravelAgencySideNav" className="sidenav">
            <li><a href="#TravelAgencySearch">Search</a></li>
            <li><a href="#TravelAgencyHighlights">Highlights</a></li>
            <li><a href="#TravelAgencyGallery">Gallery</a></li>
            <li><a href="#TravelAgencyContact">Contact</a></li>
          </ul>
          <ul className="hide-on-small-only left valign-wrapper" style={{height:"100%"}}>
            <li><a href="#TravelAgencySearch">Search</a></li>
            <li><a href="#TravelAgencyHighlights">Highlights</a></li>
          </ul>
          <ul className="hide-on-small-only right valign-wrapper" style={{height:"100%"}}>
            <li><a href="#TravelAgencyGallery">Gallery</a></li>
            <li className="right"><a href="#TravelAgencyContact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <section className="slider">
        <ul className="slides">
          { getSlide(
            "https://picsum.photos/id/400/320/240",
            "https://picsum.photos/id/400/720/480",
            "Ancient Lands",
            "Discover the secrets of Taupo!"
          )}
          { getSlide(
            "https://picsum.photos/id/401/320/240",
            "https://picsum.photos/id/401/720/480",
            "Where do they go?",
            "Uncover the stories behind Cape Reinga!"
          )}
          { getSlide(
            "https://picsum.photos/id/402/320/240",
            "https://picsum.photos/id/402/720/480",
            "Forces of Nature",
            "Ski down from the top of North Island!"
          )}
          { getSlide(
            "https://picsum.photos/id/403/320/240",
            "https://picsum.photos/id/403/720/480",
            "Depths of the Unknown",
            "Abseil 200m into a cave system!"
          )}
        </ul>
      </section>
      <section className="TravelAgencySpy section teal" id="TravelAgencySearch">
        <div className="container">
          <h3 className="center white-text" style={{margin:0}}>Search Destinations</h3>
          <form className="white" style={{margin:"10px", padding:"0 0 0 10px"}}>
            <div className="input-field">
              <i className="material-icons prefix">search</i>
              <input className="autocomplete-input" id="TravelAgencySearchInput" type="search" required />
              <label className="teal-text" htmlFor="TravelAgencySearchInput">Auckland, Rotorua, Queenstown ...</label>
            </div>
          </form>
        </div>
      </section>
      <section className="grey lighten-3 TravelAgencySpy section" id="TravelAgencyHighlights">
        <div className="center container row">
          { getAdvert(
            "airplanemode_active",
            "@ your Location",
            "Your first class flight to your holidays is ready and waiting! Book it now!",
            "Anywhere! Anytime! With return or without! All is included!"
          )}
          { getAdvert(
            "place",
            "@ your Destination",
            "Our pickup from the airport is readily prepared and waiting for your arrival!",
            "Accommodation, dining, guides, daily tours and more..."
          )}
          { getAdvert(
            "hotel",
            "@ your Hotel",
            "Visit the best BnBs and 5 star hotels or camping sites across the country!",
            "Our partners are well established and offer only luxurious service!"
          )}
          { getAdvert(
            "photo_camera",
            "@ your Tour",
            "Garanteed to become unique, our guides know how traveling is done!",
            "Experience ancient lands and forces of nature, the way you want it!"
          )}
          { getAdvert(
            "beach_access",
            "@ the Beach",
            "Relax and enjoy our private beaches, free of charge on your last day!",
            "Jetski, sailing, scuba diving, surfing and more, all equipments included!"
          )}
          { getAdvert(
            "local_phone",
            "@ our office",
            "Do you have a special requirement? Our experts will answer any query!",
            "Change your booking at any time and add more activities as you go!"
          )}
        </div>
      </section>
      <section className="section white">
        <div className="center container row">
          { getCard(
            "https://picsum.photos/id/500/320/240",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          )}
          { getCard(
            "https://picsum.photos/id/501/320/240",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          )}
          { getCard(
            "https://picsum.photos/id/502/320/240",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          )}
          { getCard(
            "https://picsum.photos/id/503/320/240",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          )}
          { getCard(
            "https://picsum.photos/id/504/320/240",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          )}
          { getCard(
            "https://picsum.photos/id/505/320/240",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "title",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          )}
        </div>
      </section>
      <section className="section teal" id="TravelAgencyGallery">
        <div className="center container white-text">
          <h3 style={{margin:0}}>Follow us</h3>
          <h6 style={{margin:"10px"}}>Follow Travel Agency on Social Media to receive special offers</h6>
          <FontAwesomeIcon icon={faFacebookSquare} size="4x" />
          <FontAwesomeIcon icon={faInstagramSquare} size="4x" style={{marginLeft:"10px"}} />
          <FontAwesomeIcon icon={faPinterestSquare} size="4x" style={{marginLeft:"10px"}} />
          <FontAwesomeIcon icon={faTwitterSquare} size="4x" style={{marginLeft:"10px"}} />
        </div>
      </section>
      <section className="center TravelAgencySpy section">
        <div className="container row">
          { getImage("https://picsum.photos/id/800/720/480") }
          { getImage("https://picsum.photos/id/802/720/480") }
          { getImage("https://picsum.photos/id/803/720/480") }
          { getImage("https://picsum.photos/id/804/720/480") }
          { getImage("https://picsum.photos/id/805/720/480") }
          { getImage("https://picsum.photos/id/806/720/480") }
          { getImage("https://picsum.photos/id/807/720/480") }
          { getImage("https://picsum.photos/id/808/720/480") }
          { getImage("https://picsum.photos/id/809/720/480") }
          { getImage("https://picsum.photos/id/810/720/480") }
          { getImage("https://picsum.photos/id/811/720/480") }
          { getImage("https://picsum.photos/id/700/720/480") }
          { getImage("https://picsum.photos/id/813/720/480") }
          { getImage("https://picsum.photos/id/814/720/480") }
          { getImage("https://picsum.photos/id/815/720/480") }
          { getImage("https://picsum.photos/id/816/720/480") }
        </div>
      </section>
      <section className="black center TravelAgencySpy section" id="TravelAgencyContact">
        <h3 className="white-text" style={{margin:0}}>Contact Us</h3>
        <div className="container row">
          <div className="col m6 s12">
            <div className="card-panel" style={{paddingBottom:"5px",paddingTop:"22px"}}>
              <div className="row">
                <i className="col large m3 material-icons s3 teal-text" style={{paddingLeft:"25px"}}>mail</i>
                <div className="col m9 s9">
                  booking@travelagency.com<br />
                  support@travelagency.com<br />
                  feedback@travelagency.com<br />
                  noreply@travelagency.com
                </div>
              </div>
            </div>
            <div className="card-panel" style={{paddingBottom:"5px",paddingTop:"22px"}}>
              <div className="row">
                <i className="col large m3 material-icons s3 teal-text" style={{paddingLeft:"25px"}}>phone</i>
                <div className="col m9 s9">
                  From the USA : 0123456789<br />
                  From the UK : 0123456789<br />
                  From Canada : 0123456789<br />
                  International : 0123456789
                </div>
              </div>
            </div>
            <div className="card-panel" style={{paddingBottom:"5px",paddingTop:"22px"}}>
              <div className="row">
                <i className="col large m3 material-icons s3 teal-text" style={{paddingLeft:"25px"}}>mail_outline</i>
                <div className="col m9 s9">
                  Travel Agency<br />
                  123 Frankenstein Cres<br />
                  12121 Little Canada<br />
                  Washington, USA
                </div>
              </div>
            </div>
          </div>
          <div className="col m6 s12">
            <form className="card-panel">
              <h5 className="grey-text text-darken-3">live chat</h5>
              <div className="input-field">
                <label htmlFor="TravelAgencyName">your full name</label>
                <input id="TravelAgencyName" type="text" />
              </div>
              <div className="input-field">
                <label htmlFor="TravelAgencyEmail">your email address</label>
                <input id="TravelAgencyEmail" type="text" />
              </div>
              <div className="input-field">
                <label htmlFor="TravelAgencyPhone">your phone number</label>
                <input id="TravelAgencyPhone" type="text" />
              </div>
              <div className="input-field">
                <textarea className="materialize-textarea" id="TravelAgencyMessage"></textarea>
                <label htmlFor="TravelAgencyMessage">your Message</label>
              </div>
              <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <h6 className="teal white-text" style={{margin:0}}>Travel Agency Inc. copyright &copy; 2020</h6>
      </section>
    </div>
  );
}

export default TravelAgency;

const getSlide = (() => {
  
  let left = true;
  
  return (bigImage, smallImage, bigHeading, smallHeading) => {

    return (
      <li>
        <img alt="decorative" src={
		      isSmall()
		        ? smallImage
		        : bigImage
  		    } />
	  	  <div className={(() => {
	  	    left = !left;
	  	    return "caption " + (left ? "left" : "right") + "-align";
	  	  })()}>
	  	  { isSmall() ? <h3>{ bigHeading }</h3> : <h2>{ bigHeading }</h2> }
	  	  { isSmall()
	  	    ? <h5 className="light grey-text text-lighten-3">{ smallHeading }</h5>
		      : <h4 className="light grey-text text-lighten-3">{ smallHeading }</h4>
	  	  }
        </div>
      </li>
    );
  }
})();

const getAdvert = (icon, bigSlogan, smallSlogan, extraSlogan) => {
  return (
    <div className="col s12 m4">
      <div className="card-panel" style={{padding:"5px 15px 5px 15px"}}>
        <div className="row">
          <i className="col large m12 material-icons s3 teal-text" style={{margin:"10px 0 0 0"}}>{icon}</i>
          <div className="col m12 s9">
            <h5 style={{margin:"10px"}}>{bigSlogan}</h5>
            <span>{smallSlogan}</span>
            <span className="hide-on-small-only"> {extraSlogan}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const getCard = (image, title, content, revealTitle, revealContent) => {
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt="decorative" className="activator" src={image} />
          <span className="card-title">{title}</span>
        </div>
        <div className="card-content">
          <p className="activator">{content}</p>
        </div>
        <div className="card-reveal teal white-text">
          <span className="card-title">{revealTitle}<i className="material-icons right">close</i></span>
          <br />
          <p>{revealContent}</p>
        </div>
      </div>
    </div>
  );
};

const getImage = (src) => {
  return (
    <div className="col s12 m3">
      <div className="card">
        <div className="card-image">
          <img alt="decorative" className="TravelAgencyBoxed responsive-img" src={src} />
        </div>
      </div>
    </div>
  );
};

function isSmall() {
  return window.screen.width < 720;
}