import React from 'react';
import "./footer.css"




export default function Footer() {

  return (
    <div className="container">
      <footer>
        <section className="ft-main">
          <div className="main-item">
            <h2 className="ft-title">About</h2>
            <ul>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Pricing</li>
              <li>Customers</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="main-item">
          <h2 className="ft-title">Resources</h2>
          <ul>
            <li>Docs</li>
            <li>Blog</li>
            <li>eBooks</li>
            <li>Webinars</li>
          </ul>
        </div>
        <div className="main-item">
          <h2 className="ft-title">Contact</h2>
          <ul>
            <li>Help</li>
            <li>Sales</li>
            <li>Advertise</li>
          </ul>
        </div>
        
        </section>
        
     
     
      <section className="ft-legal">
        <ul className="ft-legal-list">
          <li>Terms &amp; Conditions</li>
          <li>Privacy Policy</li>
          <li>&copy; 2020 Copyright Wine O'Clock </li>
        </ul>
      </section>

      </footer>

    </div>
  )
}










{/* <CssBaseline />
      
      <footer className={classes.footer}>
        <Container maxWidth="sm">
         <div>
        <ul>
          <li>
            hello
          </li>
        </ul>

         </div>
         <div>
        <ul> hola
          <li>
            hello
          </li>
        </ul>

         </div>
          
           <Copyright style={{position: 'bottom'}}/>
        </Container> */}