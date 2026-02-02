import { FaMapMarkerAlt, FaBed, FaShower, FaRulerCombined} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination} from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = {
  id: number;
  titre: string;
  prix: number;
  images: string[];
  localisation: string;
  superficie: number;
  nombrePieces: string; 
  typeBien: string;
}

const BienCard: React.FC<Props> = ({
  id,
  titre,
  prix,
  images,
  localisation,
  superficie,
  nombrePieces,
  typeBien,
}) => {
 return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:scale-[1.015] h-full">

      {/* Carrousel Swiper pour les images */}
      <div className="relative w-full h-55 sm:h-62.5 md:h-57.5 xl:h-57.5 overflow-hidden group">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={images.length > 1}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          className="w-full h-full"
        >
          {images.length > 0 ? (
            images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${titre} - ${index + 1}`}
                  className="w-full h-full object-cover" />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <span className="text-gray-600 font-semibold">No image available</span>
              </div>
            </SwiperSlide>
          )}
          <div className="swiper-button-prev group-hover:opacity-100 opacity-70 transition-opacity"></div>
          <div className="swiper-button-next group-hover:opacity-100 opacity-70 transition-opacity"></div>
        </Swiper>
       
      </div>

        {/* Contenu textuel */}
      <div className="p-4 flex flex-col justify-between grow space-y-3">
        {/* Titre et ville */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{titre}</h3>
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
            <FaMapMarkerAlt className="text-green-600" />
            {localisation}
          </p>
        </div>
   
        {/* Prix */}
        <p className="text-green-600 font-extrabold text-base sm:text-lg">
          {prix.toLocaleString()} FCFA
        </p>

        {/* Caractéristiques */}
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 border-t pt-3">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <FaBed className="text-gray-500" /> {nombrePieces}
            </div>
            <div className="flex items-center gap-1">
              <FaShower className="text-gray-500" /> {typeBien} 
            </div>
            <div className="flex items-center gap-1">
              <FaRulerCombined className="text-gray-500" /> {superficie} m²
            </div>
          </div>
          {/* <div className="flex items-center gap-2">
            <div className={`px-2 py-1 rounded-full font-semibold text-xs text-white shadow-md
              ${projet === 'location' ? 'bg-yellow-400' : 'bg-green-600'}`}
            >
              {projet === 'location' ? t('projetTypeOptions.location') : t('projetTypeOptions.achat')}
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <FaEye />
              <span>{vues ?? 0}</span>
            </div>
          </div> */}
        </div>

        {/* Bouton Voir plus */}
        <Link
          to={`/bien/${id}`}
          className="mt-4 inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
        >
          VOIR PLUS
        </Link>
      </div>
    </div>
  )
}

export default BienCard