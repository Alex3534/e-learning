export const GalleryCode01 = (`
   'use client';
// npm install framer-motion react-icons

import { useState } from 'react';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931',
      title: 'Mountain Landscape',
      description: 'Beautiful mountain range at sunset',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931',
      title: 'Ocean View',
      description: 'Waves crashing on rocky shore',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1682687220067-dced9a881b56',
      title: 'Forest Path',
      description: 'Misty morning in dense forest',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1682687220067-dced9a881b56',
      title: 'Desert Sands',
      description: 'Rolling sand dunes at dawn',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1682686580186-b55d2a91053c',
      title: 'City Lights',
      description: 'Urban nightscape from above',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1682687220067-dced9a881b56',
      title: 'Waterfall',
      description: 'Cascading waterfall in tropical setting',
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const Modal = ({ image, onClose }) => (
    <AnimatePresence>
      {image && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            key="content"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl max-h-[90vh] bg-white/10 backdrop-blur-md rounded-xl p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition"
              aria-label="Fermer"
            >
              <FiX />
            </button>

            {/* Image */}
            <motion.img
              key={image.url}
              src={image.url}
              alt={image.title}
              className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl mx-auto"
              loading="lazy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            {/* Titre et description */}
            <div className="mt-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
              <p className="text-gray-200 text-lg">{image.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto py-12 min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Professional Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              onClick={() => openModal(image, index)}
              tabIndex={0}
              role="button"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <FiZoomIn className="text-3xl mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modale */}
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />

        {images.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No images to display</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;


// app/page.jsx
import React from "react";
import ImageGallery from "./components/gallery";

export default function Home() {
  return (
    <React.Fragment>
      <ImageGallery />

      // ......
    </React.Fragment>
  );
}

 
`).trim();