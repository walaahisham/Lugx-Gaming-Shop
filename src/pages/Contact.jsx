
import { useState } from "react";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth";

const field =
  "mb-[30px] w-full rounded-[25px] border border-[#e7e7e7] bg-[#f7f7f7] px-5 text-sm text-[#4a4a4a] outline-none focus:border-[#0071f8]";

const info = [
  ["Address", "Sunny Isles Beach, FL 33160, United States"],
  ["Phone", "+123 456 7890"],
  ["Email", "lugx@contact.com"],
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHeading title="Contact Us" crumbs={[{ label: "Contact Us" }]} />

      <section className="mt-[120px] max-lg:mt-[90px] max-md:mt-[65px]">
        <div className="lx-container">
          <div className="grid gap-x-6 gap-y-10 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="self-center">
              <div className="rounded-[25px] bg-[#f7f7f7] p-[60px] max-lg:p-[40px] max-md:p-[30px] max-sm:p-[22px]">
                <SectionHeading
                  eyebrow="Contact Us"
                  className="mb-[50px] max-md:mb-[30px]"
                >
                  Say Hello!
                </SectionHeading>

                <p className="mb-[50px] max-md:mb-[30px] max-sm:text-sm">
                  LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework. This template is provided by TemplateMo and it is suitable for your gaming shop ecommerce websites. Feel free to use this for any purpose. Thank you.
                </p>

                <ul>
                  {info.map(([label, value]) => (
                    <li
                      key={label}
                      className="mb-[30px] block text-base text-[#aaa] last:mb-0 max-sm:text-sm"
                    >
                      <span className="mb-[5px] block text-sm font-semibold text-[#4a4a4a]">
                        {label}
                      </span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Map and Contact Form */}
            <div className="lg:ml-[50px] max-lg:mt-[10px]">
              <div className="mb-[60px] max-md:mb-[35px]">
                <iframe
                  title="Map"
                  src={MAP_SRC}
                  width="100%"
                  height="325"
                  style={{ border: 0, borderRadius: 23 }}
                  allowFullScreen
                  loading="lazy"
                  className="h-[325px] w-full max-md:h-[280px] max-sm:h-[230px]"
                />
              </div>

              <form onSubmit={onSubmit}>
                {sent && (
                  <p
                    role="status"
                    className="mb-[30px] rounded-[25px] bg-green-100 px-5 py-3 font-medium text-green-800"
                  >
                    Message sent. We’ll get back to you soon.
                  </p>
                )}

                <div className="grid gap-x-6 lg:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name..."
                    aria-label="Your name"
                    autoComplete="given-name"
                    required
                    className={`${field} h-[50px]`}
                  />

                  <input
                    type="text"
                    name="surname"
                    placeholder="Your Surname..."
                    aria-label="Your surname"
                    autoComplete="family-name"
                    required
                    className={`${field} h-[50px]`}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your E-mail..."
                    aria-label="Your email"
                    autoComplete="email"
                    required
                    className={`${field} h-[50px]`}
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject..."
                    aria-label="Subject"
                    className={`${field} h-[50px]`}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  aria-label="Your message"
                  className={`${field} h-[130px] resize-none px-5 py-5 max-sm:h-[110px]`}
                />

                <button
                  type="submit"
                  className="inline-block h-[50px] rounded-[25px] bg-[#ee626b] px-[25px] text-[15px] font-medium uppercase leading-[50px] text-white transition-all duration-300 hover:bg-[#0071f8] max-sm:w-full max-sm:px-4 max-sm:text-[13px]"
                >
                  Send Message Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
