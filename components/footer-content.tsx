import { useGetTime } from "@/hooks/use-get-time";
import { CONTACTS, LOCATION, SOCIALS_LINKS } from "@/lib/data";
import { motion, MotionValue, useTransform } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import ContactForm from "./contact-form";

export default function FooterContent({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollProgress, [0, 1], [-700, 0]);
  const time = useGetTime();

  return (
    <div className="overflow-hidden">
      <motion.footer
        style={{
          y,
        }}
        className="overflow-x-hidden mt-12 sm:mt-8"
      >
        <div className="text-[#f6f6f6] w-[100w] bg-[#292929] overflow-x-hidden">
          <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 overflow-x-hidden">
            <div className="md:col-span-2 flex flex-col gap-4">
              <h2 className="text-4xl font-bold">Want to get in touch?</h2>
              <p className="text-xl font-normal">
                I&apos;m always open to new opportunities and collaborations.
                Feel free to reach out to me via WhatsApp.
              </p>
              <ContactForm />
            </div>
            <div className="flex flex-col md:mx-auto justify-between">
              <div className="flex flex-col items-start space-y-2 p-4">
                <h2 className="text-xl font-bold">Contact Detail</h2>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <a
                      href={`tel:${CONTACTS.phone}`}
                      className="underline-hover-effect-alt"
                    >
                      {CONTACTS.phone}
                    </a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <a
                      href={`mailto:${CONTACTS.email}`}
                      className="underline-hover-effect-alt"
                    >
                      {CONTACTS.email}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start space-y-2 p-4">
                <h2 className="text-xl font-bold">My Digital Space</h2>
                <ul className="space-y-1">
                  {SOCIALS_LINKS.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 underline-hover-effect-alt !pb-0"
                      >
                        {social.icon}
                        {social.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start space-y-2 p-4">
                <h2 className="text-xl font-bold">Location</h2>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    {LOCATION.coords.latitude} {LOCATION.coords.longitude}
                  </li>
                  <li className="flex items-center space-x-2">
                    {LOCATION.location}
                  </li>
                  <li className="flex items-center space-x-2">{time}</li>
                </ul>
              </div>
            </div>

            <div className="col-span-1 md:col-span-3 flex flex-row justify-between items-center text-sm">
              <div className="flex flex-col sm:flex-row align-text-bottom">
                &copy; {new Date().getFullYear()}
                <a
                  className="mx-1 hover:underline font-semibold"
                  href="https://github.com/BadryansahBangsawan_"
                  target="_blank"
                >
                  Badryansah Bangsawan
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined" && window.scrollTo) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="group font-normal flex items-center gap-2 px-4 py-2 rounded-full focus:scale-110 hover:scale-110 active:scale-110 transition cursor-pointer"
              >
                Back to top
                <BsArrowUpRight className="group-hover:-rotate-45 transition" />
              </button>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
