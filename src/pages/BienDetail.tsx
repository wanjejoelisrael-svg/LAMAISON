import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { biensMock } from '../lib/mock';
import { FaMapMarkerAlt, FaBed, FaRulerCombined, FaArrowLeft, FaShower, FaSwimmingPool, FaCouch, FaUtensils} from 'react-icons/fa'

const BienDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const bien = biensMock.find((b) => b.id === Number(id))

  const [currentIndex, setCurrentIndex] = useState(0)

  if (!bien) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Bien introuvable</p>
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Retour */}
      <Link
        to="/bien"
        className="flex items-center gap-2 text-green-600 mb-6"
      >
        <FaArrowLeft /> Retour aux biens
      </Link>

      {/* Images */}
      <div className="relative h-96 rounded-xl overflow-hidden mb-8">
        <img
          src={bien.images[currentIndex]}
          alt={bien.titre}
          className="h-full w-full object-cover"
        />

        {/* Pagination images */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bien.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex
                  ? 'bg-amber-500'
                  : 'bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Infos */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Texte */}
        <div className="md:col-span-2 space-y-5">
          <h1 className="text-3xl font-bold">{bien.titre}</h1>

          <p className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-green-600" />
            {bien.localisation}
          </p>

          <p className="text-green-600 text-2xl font-extrabold">
            {bien.prix.toLocaleString()} FCFA
          </p>

          <p className="text-gray-700 leading-relaxed">
            {bien.description}
          </p>
        </div>

        {/* Caractéristiques */}
        <div className="bg-gray-100 rounded-xl p-6 space-y-4">
          <h3 className="font-semibold text-lg">Caractéristiques</h3>

          <div className="flex items-center gap-2">
            <FaBed /> chambre : {bien.chambre}
          </div>

          <div className="flex items-center gap-2">
            <FaShower /> salle de bain : {bien.salleDeBain}
          </div>

          <div className="flex items-center gap-2">
            <FaSwimmingPool /> piscine : {bien.piscine}
          </div>

          <div className="flex items-center gap-2">
            <FaCouch /> salon : {bien.salon}
          </div>

          <div className="flex items-center gap-2">
            <FaUtensils /> cuisine : {bien.cuisine}
          </div>

          <div className="flex items-center gap-2">
            <FaRulerCombined /> superficie : {bien.superficie} m²
          </div>

          <div className="flex items-center gap-2">
           <span className="font-medium">Type</span> : {bien.typeBien}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BienDetail
