import React, { useRef, useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { HiOutlineExternalLink } from "react-icons/hi";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const form = useRef();
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [recaptchaError, setRecaptchaError] = useState('');
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Dial to connect!',
      content: <a href="tel:+94719365797">+94 71 936 5797</a>
    },
    {
      icon: <HiOutlineExternalLink />,
      title: 'Catch us on us!',
      content: <>
        <a href="https://www.facebook.com/RANDULAJEYPHOTOGRAPHY">Facebook</a><br />
        <a href="https://www.instagram.com/randula_jey_photography/">Instagram</a>
      </>
    },
    {
      icon: <SiWhatsapp />,
      title: 'Chat with whatsapp!',
      content: <a href="https://wa.me/94719365797" target="_blank">+94 71 936 5797</a>
    },
    {
      icon: <Mail />,
      title: 'Write to us!',
      content: <a href="https://mail.google.com/mail/?view=cm&to=randulajeeyphotography@gmail.com">randulajeeyphotography@gmail.com</a>
    },
  ];

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    if (!formData.first_name.trim()) { newErrors.first_name = 'First name is required'; isValid = false; }
    if (!formData.last_name.trim()) { newErrors.last_name = 'Last name is required'; isValid = false; }
    if (!formData.email.trim()) { newErrors.email = 'Email is required'; isValid = false; }
    else if (!validateEmail(formData.email)) { newErrors.email = 'Invalid email'; isValid = false; }
    if (!formData.subject.trim()) { newErrors.subject = 'Subject is required'; isValid = false; }
    if (!formData.message.trim()) { newErrors.message = 'Message is required'; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = e => {
    e.preventDefault();

    if (!validateForm()) {
      setPopupMessage('Please fill all required fields.');
      setShowPopup(true);
      return;
    }

    if (!recaptchaValue) {
      setRecaptchaError('Please verify that you are not a robot.');
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setPopupMessage('Request sent successfully!');
        setShowPopup(true);
        form.current.reset();
        setFormData({ first_name: '', last_name: '', email: '', subject: '', message: '' });
        setErrors({});
        setRecaptchaValue(null);
        setRecaptchaError('');
      })
      .catch(() => {
        setPopupMessage('Failed to send the request!');
        setShowPopup(true);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-20 gap-6 lg:gap-12" style={{ fontFamily: 'Bellefair, serif', color: '#2c2264' }}>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-xs" />
          <div className="relative bg-white p-6 shadow-xl w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 max-w-md text-center">
            <p className="text-lg text-[var(--RandulaBlue)]">{popupMessage}</p>
            <button onClick={() => setShowPopup(false)} className="mt-4 px-6 py-2 bg-[var(--RandulaBlue)] text-white font-bellefair hover:scale-105 transition">Close</button>
          </div>
        </div>
      )}

      {/* Left Side */}
      <div className="w-full lg:w-1/2 space-y-6 self-start">
        <div>
          <div className="flex items-center mb-1">
            <h3 className="text-lg text-gray-600 mr-2">Contact Us</h3>
            <div className="w-[50px] border-t border-gray-600" />
          </div>
          <h1 className="text-4xl text-[var(--RandulaBlue)] font-bellefair">Let's Connect!</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map(({ icon, title, content }, i) => (
            <div key={i}>
              <div className="flex items-start gap-2 text-xl">
                {icon}
                <div className="text-2xl">
                  {title}
                  <div className="mt-1 space-y-1 text-lg font-bellefair">
                    {Array.isArray(content?.props?.children) ? (
                      content.props.children.map((child, index) =>
                        typeof child === 'string' ? (
                          <br key={index} />
                        ) : (
                          <a
                            key={index}
                            href={child.props.href}
                            target={child.props.target || "_self"}
                            rel={child.props.target === "_blank" ? "noopener noreferrer" : undefined}
                            className="block w-fit relative text-gray-600 hover:text-[var(--RandulaBlue)] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[var(--RandulaBlue)] hover:after:w-full after:transition-all after:duration-300"
                          >
                            {child.props.children}
                          </a>
                        )
                      )
                    ) : (
                      <a
                        href={content.props.href}
                        target={content.props.target || "_self"}
                        rel={content.props.target === "_blank" ? "noopener noreferrer" : undefined}
                        className="block w-fit relative text-gray-600 hover:text-[var(--RandulaBlue)] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[var(--RandulaBlue)] hover:after:w-full after:transition-all after:duration-300"
                      >
                        {content.props.children}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="w-full h-80 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.347516886691!2d80.5322145747482!3d5.9467566940377505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fae1e496201%3A0xc07cf28abe1cc1a8!2sPrint%20Bay%20Digital%20Color%20Lab!5e0!3m2!1sen!2slk!4v1746703879391!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <form ref={form} onSubmit={sendEmail} className="w-full lg:w-1/2 mt-8 space-y-6 self-start">
        <h1 className="text-4xl text-[var(--RandulaBlue)] font-bellefair">Get in Touch!</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" className="w-full border px-4 py-2 h-10 focus:border-[var(--RandulaBlue)]" />
            {errors.first_name && <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>}
          </div>
          <div>
            <input name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" className="w-full border px-4 py-2 h-10 focus:border-[var(--RandulaBlue)]" />
            {errors.last_name && <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>}
          </div>
        </div>

        <div>
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border px-4 py-2 h-10 focus:border-[var(--RandulaBlue)]" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full border px-4 py-2 h-10 focus:border-[var(--RandulaBlue)]" />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>

        <div>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Message" className="w-full border h-42 px-4 py-2 focus:border-[var(--RandulaBlue)]" />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex justify-start">
          <div className="transform scale-80 origin-top-left -mt-5">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={setRecaptchaValue}
            />
          </div>
        </div>
        {recaptchaError && <p className="text-xs text-red-500 mt-1 text-center">{recaptchaError}</p>}

        <button type="submit" className="w-full h-10 border border-[var(--RandulaBlue)] bg-transparent text-[var(--RandulaBlue)] font-medium transition hover:scale-105">
          Send Your Request!
        </button>
      </form>
    </div>
  );
};

export default Contact;
