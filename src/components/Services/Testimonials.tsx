"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const testimonials = [
  {
    name: "Marie Laurent",
    role: "Fondatrice de E-boutique Bio",
    content: "Grâce aux services de rédaction web d'Horizon Écrit, notre trafic organique a augmenté de 150% en 6 mois.",
    image: "/images/testimonial/author-01.jpg"
  },
  {
    name: "Thomas Dubois",
    role: "Consultant Digital",
    content: "La formation en stratégie de contenu m'a permis d'acquérir des compétences précieuses que j'utilise quotidiennement.",
    image: "/images/testimonial/author-02.jpg"
  },
  {
    name: "Sophie Martin",
    role: "Directrice Marketing",
    content: "Un accompagnement professionnel et des résultats concrets. Je recommande vivement leurs services.",
    image: "/images/testimonial/author-03.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-2">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-base text-body-color dark:text-body-color-dark">
            Découvrez les retours d'expérience de nos clients satisfaits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-black dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-body-color dark:text-body-color-dark">
                "{testimonial.content}"
              </p>
              <div className="flex mt-6">
                <Icon 
                  icon="fluent:star-24-filled" 
                  className="w-5 h-5 text-yellow-500"
                />
                <Icon 
                  icon="fluent:star-24-filled" 
                  className="w-5 h-5 text-yellow-500"
                />
                <Icon 
                  icon="fluent:star-24-filled" 
                  className="w-5 h-5 text-yellow-500"
                />
                <Icon 
                  icon="fluent:star-24-filled" 
                  className="w-5 h-5 text-yellow-500"
                />
                <Icon 
                  icon="fluent:star-24-filled" 
                  className="w-5 h-5 text-yellow-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;