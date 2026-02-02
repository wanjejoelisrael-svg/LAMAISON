import React from 'react'
import { useState } from 'react'
import Dropdown from './Dropdown'

const propertyTypes = [
  "Appartement",
  "Maison",
  "Terrain",
  "Bureau",
  "Boutique"
]

const locations = [
  "Yaoundé",
  "Douala",
  "Bafoussam",
  "Kribi",
  "Garoua"
]

const prices = [
  "Moins de 10M",
  "10M - 25M",
  "25M - 50M",
  "50M - 100M",
  "Plus de 100M"
]


const Searchbar: React.FC = () => {

const [type, setType] = useState<string>("")
const [location, setLocation] = useState<string>("")
const [price, setPrice] = useState<string>("")

const [openDropdown, setOpenDropdown] = useState<
  "type" | "location" | "price" | null
>(null)

  const handleSearch = () => {
    const filters = { type, location, price }
    console.log("Filtres de recherche :", filters)
  }


  return (
     <div className="bg-white p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Dropdown
          label="Type de bien"
          options={propertyTypes}
          value={type}
          isOpen={openDropdown === "type"}
          onToggle={() =>
            setOpenDropdown(openDropdown === "type" ? null : "type")
          }
          onSelect={(value) => {
            setType(value)
            setOpenDropdown(null)
          }}
        />
                <Dropdown
          label="Localisation"
          options={locations}
          value={location}
          isOpen={openDropdown === "location"}
          onToggle={() =>
            setOpenDropdown(openDropdown === "location" ? null : "location")
          }
          onSelect={(value) => {
            setLocation(value)
            setOpenDropdown(null)
          }}
        />

                <Dropdown
          label="Prix"
          options={prices}
          value={price}
          isOpen={openDropdown === "price"}
          onToggle={() =>
            setOpenDropdown(openDropdown === "price" ? null : "price")
          }
          onSelect={(value) => {
            setPrice(value)
            setOpenDropdown(null)
          }}
        />

                <button
          onClick={handleSearch}
          className="bg-amber-500 text-white font-semibold rounded-xl px-6 py-3 hover:bg-amber-600 transition w-full"
        >
          Rechercher
        </button>

              </div>
    </div>
  )
}

export default Searchbar
