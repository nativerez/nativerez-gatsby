import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Button from "../components/button"
import GetStarted from "../components/getstarted";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import heroUnderline from "..//images/digitl-agency-underline.png";
import heroBGImage from "..//images/zero-gravity-device-2019-min.jpg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="h-screen py-6 flex flex-col justify-center bg-gray-900 bg-cover" style={{ backgroundImage: `url(${heroBGImage})` }}>
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="relative container text-center">
          <div className="max-w-screen-sm mx-auto">
            <h1 className="relative z-20 text-6xl lg:text-9xl font-bold text-white leading-none font-display tracking-tighter">
              Pixels with Purpose
                  </h1>    
            <img className="w-full z-10" src={heroUnderline} alt="" />
          </div>
          <Button to="/contact/">View Work</Button> 
          

        </div>
        {/* <div className="scroll-indicator mx-auto text-center my-5">
          <h4 className="lax" data-lax-opacity="0 1, (vh*0.05) 0">scroll down</h4>
          <i className="lax fas fa-chevron-down mx-auto" data-lax-opacity="0 1, (vh*0.1) 0" data-lax-translate-y="0 0, 200 100"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-chevron-down fa-w-14 fa-3x"><path fill="#432776" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" className=""></path></svg></i>
        </div> */}
      </section>

      

      <section>
        <div className="container">
          <div className="max-w-screen-xl mx-auto bg-blue-800 rounded-lg text-white p-16 space-y-6 transform -translate-y-36">
            <div>
              <p className="text-xs tracking-widest uppercase text-center font-display font-bold">about</p>
            </div>
            <div className="flex items-start space-x-12">
              <div className="w-1/2">
                <p className="font-display text-6xl text-right tracking-tighter leading-none">We develop digital strategies, products and services.</p>
              </div>
              <div className="w-1/2 border-b border-blue-600 pb-6 font-serif">
                <p className="text-2xl">NATIVEREZ is a creative marketing agency that specializes in strategy, creativity, design and innovative technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetStarted
          title = "Try a goldfish for free."
          ctaButton = "Get Started"
          subtitle = "No credit card required."
        />

      <section className="bg-gray-900 py-24">
        <div className="container">
         
            <div className="max-w-screen-xl mx-auto flex justify-between space-x-12">
              <div className="text-center space-y-6">
                <i className="icon-mobile text-8xl text-blue-700"></i>
                <p className="uppercase text-xs tracking-widest text-white font-display">development</p>
              </div>
              <div className="text-center space-y-6">
                <i className="icon-desktop text-8xl text-blue-700"></i>
                <p className="uppercase text-xs tracking-widest text-white font-display">design</p>
              </div>
              <div className="text-center space-y-6">
                <i className="icon-pictures text-8xl text-blue-700"></i>
                <p className="uppercase text-xs tracking-widest text-white font-display">editing</p>
              </div>
              <div className="text-center space-y-6">
                <i className="icon-mobile text-8xl text-blue-700"></i>
                <p className="uppercase text-xs tracking-widest text-white font-display">consultancy</p>
              </div>
            </div>
         
        </div>
      </section>

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        />

        <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
          Hey there! Welcome to your first Gatsby site.
        </h2>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{` `}
          
          <a
            className="font-bold text-gray-900 no-underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          , a utility-first CSS framework.
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
