import img7 from '../../assets/img/img7.jpg';
import img8 from '../../assets/img/img8.jpg';
import img9 from '../../assets/img/img9.jpg';
import img10 from '../../assets/img/img10.jpg';
import img11 from '../../assets/img/img11.jpg';
import img16 from '../../assets/img/img16.jpg';
import img21 from '../../assets/img/img21.jpg';
import img18 from '../../assets/img/img18.jpg';

import React, { useEffect, useState } from 'react'

const images: string[] = [
  img7,
  img8,
  img9,
  img10,
  img11,
  img16,
  img21,
  img18
]

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const items = images.slice(0, 6);
  // Auto pagination (slider automatique)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      )
    }, 10000) // 10 secondes

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="relative h-[90vh] w-full overflow-hidden group">
      
      {/* Images */}
      {images.slice(currentIndex, currentIndex + 1).map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
        >
          <img
            src={image} 
            alt="Bien immobilier LAMAISON"
            className="h-full w-full object-cover"
          />

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Texte uniquement sur la première image */}
          {currentIndex === 0 && (
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <div className="max-w-3xl text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Découvrez des maisons d'exceptions au Cameroun
                </h1>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/60 text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition cursor-pointer ${
              index === currentIndex
                ? 'bg-amber-500'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
