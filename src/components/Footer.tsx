import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from '../assets/LOGO.png'
import { Link } from "react-router-dom";


const Footer : React.FC = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <p className="text-sm leading-relaxed">
              <Link to="/" className="hover:text-yellow-400"><img className='h-10 w-auto mb-4' src={logo} alt='logo' /></Link>
            LAMAISON est votre plateforme immobilière de confiance pour acheter,
            louer et vendre des biens immobiliers partout au Cameroun.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:contact@lamaison.com" className="hover:text-gray-400">
                Info@lamaison.cm
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href="https://wa.me/237690460366"
                target="_blank"
                className="hover:text-white-400"
              >
                WhatsApp : +237 6 90 46 03 66 / 678 78 36 84
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Yaoundé, Cameroun</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Liens utiles</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/bien" className="hover:text-yellow-400">Biens immobiliers</Link></li>
            <li><Link to="/favoris" className="hover:text-yellow-400">Favoris</Link></li>
            <li><Link to="/apropos" className="hover:text-yellow-400">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Suivez-nous</h3>

          <div className="flex items-center gap-4 mb-4">
            <a href="#" className="hover:yellow-400">
              <Facebook />
            </a>
            <a href="#" className="hover:yellow-400">
              <Instagram />
            </a>
            <a href="#" className="hover:yellow-400">
              <Linkedin />
            </a>
          </div>

          {/* <h4 className="text-white font-semibold mb-2">
            Application web
          </h4>
          <div className="flex items-center gap-3 text-sm">
            <Smartphone size={16} />
            <span>Disponible sur Android & App Store</span>
          </div> */}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 py-6 text-center text-sm">
        © {currentYear} LAMAISON. Tous droits réservés.
      </div>
    </footer>
    
  )
}

export default Footer