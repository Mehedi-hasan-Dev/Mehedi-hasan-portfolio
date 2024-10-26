import { Mail, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_76dvy68', 
      'template_g7a62si', 
      form.current,
      'IkawLb4qq6-XO25dT' 
    ).then(
      (result) => {
        console.log('Email sent:', result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log('Email send error:', error.text);
        alert('Failed to send the message. Please try again.');
      }
    );
  };

  return (
    <div>
      <div className="rounded-lg bg-[#f1f1f1] dark:bg-[#1D232A] my-6 pb-4">
        <div className="text-center px-6">
          <h2 className="text-gray-600 dark:text-slate-200 text-3xl font-extrabold pt-5">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-3 items-start lg:gap-0 xl:gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] dark:shadow-transparent dark:bg-[#222931] rounded-lg mt-12">
          <div className="bg-gray-700 dark:bg-slate-300 rounded-lg p-6 w-full max-lg:order-1">
            <h2 className="text-xl text-white dark:text-gray-800 font-medium">Contact Information</h2>
            <ul className="mt-16 space-y-8 lg:w-full">
              <li className="flex items-center lg:flex-col xl:flex-row text-sm space-y-2">
                <Mail className="text-white dark:text-gray-800"/>
                <p className="text-white dark:text-gray-800 text-xs ml-4">mehedi.hasan.dev15@gmail.com</p>
              </li>
              <li className="flex items-center lg:flex-col xl:flex-row text-sm space-y-2">
                <Phone className="text-white dark:text-gray-800"/>
                <p className="text-sm dark:text-gray-800 text-white ml-4">+8801684157736</p>
              </li>
              <li className="flex items-center lg:flex-col xl:flex-row text-sm space-y-2">
                <MapPin className="text-white dark:text-gray-800"/>
                <p className="text-white dark:text-gray-800 text-sm ml-4">Jatrabari, Dhaka, Bangladesh</p>
              </li>
            </ul>
          </div>

          <div className="p-4 lg:col-span-2 shadow-sm">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="relative flex items-center">
                  <input type="text" name="first_name" placeholder="First Name"
                    className="px-2 py-3 bg-white dark:bg-[#222931] w-full text-sm text-gray-800 border-b border-gray-300 dark:text-slate-200 focus:border-blue-500 outline-none" />
                  <User className="w-[18px] h-[18px] absolute right-2 text-gray-400 dark:text-slate-200"/>
                </div>

                <div className="relative flex items-center">
                  <input type="text" name="last_name" placeholder="Last Name"
                    className="px-2 py-3 dark:bg-[#222931] bg-white w-full text-sm text-gray-800 border-b dark:text-slate-200 border-gray-300 focus:border-blue-500 outline-none" />
                  <User className="w-[18px] h-[18px] absolute right-2 text-gray-400"/>
                </div>

                <div className="relative flex items-center">
                  <input type="text" name="phone" placeholder="Phone Number"
                    className="px-2 py-3 dark:bg-[#222931] bg-white w-full text-sm text-gray-800 border-b dark:text-slate-200 border-gray-300 focus:border-blue-500 outline-none" />
                  <Phone className="w-[18px] h-[18px] absolute right-2 text-gray-400"/>
                </div>

                <div className="relative flex items-center">
                  <input type="email" name="email" placeholder="Email"
                    className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b dark:bg-[#222931] dark:text-slate-200 border-gray-300 focus:border-blue-500 outline-none" />
                  <Mail className="w-[18px] h-[18px] absolute right-2 text-gray-400"/>
                </div>

                <div className="relative flex items-center sm:col-span-2">
                  <textarea name="message" placeholder="Write Message"
                    className="px-2 pt-3 bg-white w-full text-sm text-gray-800 border-b dark:bg-[#222931] border-gray-300 focus:border-blue-500 outline-none resize-none"></textarea>
                  <MessageCircle className="w-[18px] h-[18px] absolute right-2 text-gray-400"/>
                </div>
              </div>

              <button type="submit"
                className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-gray-500 hover:bg-blue-500">
                <Send/>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
