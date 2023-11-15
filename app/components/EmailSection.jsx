"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/images/github.svg";
import FacebookIcon from "../../public/images/facebook.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 font-san" id="contact">
      <div>
        {" "}
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {""}
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/Wake7401"}>
            <Image className="bg-white" src={GithubIcon} alt="github" />
          </Link>
          <Link href={"https://www.facebook.com/wake.7401"}>
            <Image src={FacebookIcon} alt="facebook" />
          </Link>
        </div>
      </div>
      <div>
        <form
          action=""
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();

            if (submitted) {
              return;
            }
            setSubject("");
            setEmail("");
            setMessage("");
            setSubmitted(true);
            
            fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                subject,
                email,
                message,
              }),
            });
          }}
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              type="email"
              id="email"
              required
              placeholder="example@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium"
            >
              Subject
            </label>
            <input
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Hi"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about...."
            ></textarea>
          </div>
          <button
            type="submit"
            className={
              submitted
                ? "bg-green-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                : "bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            }
          >
            {submitted ? "Successfully Message" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
