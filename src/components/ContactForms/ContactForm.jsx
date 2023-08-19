import React from 'react'

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        const firstName = event.target.first_name.value;
        const lastName = event.target.last_name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        const subject = "Contact Form Submission from Portfolio Website";
        const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

        const mailtoLink = `mailto:surajphulara@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };
  return (
    <form className="contact-form w-2/4  max-w-[50%] text-left justify-center flex flex-col text-2xl" onSubmit={handleSubmit}>
            <div class="grid gap-6 mb-6 md:grid-cols-2 text-2xl">
              <div>
                <label for="first_name" class="block mb-2 text-lg font-medium text-gray-900">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Bruce" required />
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-lg font-medium text-gray-900">Last name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Wayne" />
              </div>
              <div>
                <label for="phone" class="block mb-2 text-lg font-medium text-gray-900">Phone number</label>
                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="+91 1234567890" />
              </div>
              <div class="">
                <label for="email" class="block mb-2 text-lg font-medium text-gray-900">Email address</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="IamBatman@gmail.com" required />
              </div>
            </div>


            <div class="mb-6">
              <label for="message" class="block mb-2 text-lg font-medium text-gray-900">Message</label>
              <textarea id="message" rows="3" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Message" required />
            </div>

            <div className=" text-center w-full">
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </div>
          </form>
  )
}

export default ContactForm