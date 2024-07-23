import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_v3wqtwt',
      'template_1kl3x0u',
      formData,
      '5sTmvO4Sqe8YMi6P6'
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
      alert('Message successfully sent!');
    }).catch((error) => {
      console.log('Failed to send email.', error.text);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <div className="App">
      <header className="bg-purple py-3 fixed-top">
        <nav className="container d-flex justify-content-between align-items-center">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-yellow" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-yellow" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-yellow" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-yellow" href="#">Landing</a>
            </li>
          </ul>
          <button className="btn btn-warning">Buy Now</button>
        </nav>
      </header>

      <main className="mt-5 pt-5">
        <section className="hero text-center py-5">
          <div className="container">
            <h1>Your Gateway to Tokenized Commodities</h1>
            <p className="lead my-4">
              At Qommodex, we revolutionize the commodity market by tokenizing assets such as oil, gold, and silver. Our platform provides a seamless exchange for buying, selling, and staking these tokens. Leveraging advanced blockchain technology, we aim to lower transaction costs, increase transaction speed, enhance supply chain transparency, and boost liquidity.
            </p>
            <div>
              <button className="btn btn-warning mr-2">Purchase UI Kit</button>
              <button className="btn btn-outline-warning">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features py-5 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 text-center">
                <h2 className="h5">Light, Fast & Powerful</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h2 className="h5">Light, Fast & Powerful</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h2 className="h5">Light, Fast & Powerful</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center">
                <h2 className="h5">Light, Fast & Powerful</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="contact py-5 bg-light">
          <div className="form-container">
            <h2 className="h3 text-center">Contact Us</h2>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="institution" className="form-label">Institution Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  placeholder="Enter your institution name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning">Submit</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-purple py-3">
        <div className="container d-flex justify-content-between text-yellow">
          <p>&copy; 2023 YourCompany</p>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-yellow" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-yellow" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-yellow" href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;