import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    
      alert('send mail');
    
    
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100" style={{ marginRight: '9cm', marginTop:'1cm' }}>
        <div className="card card-success" style={{ width: '30rem'  }}>
          <h1 className='justify-content-center'>Contactez-nous</h1>

          <div className="card-header">
            <p className="card-title">N'hésitez pas à nous poser vos questions ou à nous faire part de vos préoccupations.
              Notre équipe dévouée est à votre disposition et s'efforcera de vous répondre dans les plus brefs délais.
              Votre satisfaction est notre priorité, et nous sommes là pour vous offrir le soutien nécessaire.
              Contactez-nous dès maintenant, et nous vous assurons une assistance rapide et efficace.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input type="text" id="subject" name="subject" className="form-control" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Votre Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="2"
                  className="form-control md-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="card-footer">
              <input type="submit" className="btn btn-success" value="Envoyer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
