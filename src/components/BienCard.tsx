import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaBed, FaShower, FaRulerCombined, FaSwimmingPool, FaCouch, FaUtensils } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {
  id: number
  titre: string
  prix: number
  images: string[]
  localisation: string
  superficie: number
  chambre: string
  salleDeBain: string
  piscine: string
  salon: string
  cuisine: string
  typeBien: string
}

const BienCard: React.FC<Props> = ({
  id,
  titre,
  prix,
  images,
  localisation,
  superficie,
  chambre,
  salleDeBain,
  piscine,
  salon,
  cuisine,
  typeBien,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = images.slice(0, 5)

  /* Auto-slide */
  useEffect(() => {
    if (items.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      )
    }, 10000)

    return () => clearInterval(interval)
  }, [items.length])

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="flex flex-col bg-white border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group h-full">

      {/* IMAGE SLIDER */}
      <div className="relative h-56 overflow-hidden">
        {items.length > 0 ? (
          <>
            <img
              src={items[currentIndex]}
              alt={titre}
              className="h-full w-full object-cover transition-opacity duration-700"
            />

            {/* Prev */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ‹
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
            >
              ›
            </button>

            {/* Pagination */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${index === currentIndex
                      ? 'bg-amber-500'
                      : 'bg-white/60'
                    }`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-300">
            <span>Aucune image</span>
          </div>
        )}
      </div>

      {/* CONTENU */}
      <div className="p-4 flex flex-col justify-between grow space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
            {titre}
          </h3>
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
            <FaMapMarkerAlt className="text-green-600" />
            {localisation}
          </p>
        </div>

        <p className="text-green-600 font-bold text-lg">
          {prix.toLocaleString()} FCFA
        </p>

        <div className="text-sm text-gray-600 border-t pt-3">
          <div className="flex items-center gap-1">
            <FaBed /> chambre : {chambre}
          </div>
          <div className="flex items-center gap-2">
            <FaShower /> salle de bain : {salleDeBain}
          </div>
          <div className="flex items-center gap-2">
            <FaSwimmingPool /> piscine : {piscine}
          </div>
          <div className="flex items-center gap-2">
            <FaCouch /> salon : {salon}
          </div>
          <div className="flex items-center gap-2">
            <FaUtensils /> cuisine : {cuisine}
          </div>
          <div className="flex items-center gap-2">
           <span className="font-medium"> Type </span>: {typeBien}
          </div>
          <div className="flex items-center gap-2">
            <FaRulerCombined /> superficie : {superficie} m²
          </div>
        </div>


        <Link
          to={`/bien/${id}`}
          className="bg-green-600 hover:bg-green-700 text-white text-center py-2 rounded-md text-sm font-medium transition"
        >
          VOIR PLUS
        </Link>
      </div>
    </div>
  )
}

export default BienCard
