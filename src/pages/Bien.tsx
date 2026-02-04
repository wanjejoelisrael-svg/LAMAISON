import BienCard from '../components/BienCard'
import { biensMock } from '../lib/mock';
import Searchbar from '../components/Searchbar';
// type Annonce = {
//     id: number;
//     titre: string;
//     prix: number;
//     images: string[];
//     localisation: string;
//     superficie: number;
//     nombrePieces: number;
//     typeBien: string;
// }
const Bien: React.FC = () => {
    return (
        <section className="py-8 px-4 max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center"> Explorez nos Biens</h2>
            <Searchbar />
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {biensMock.map((a) => (
                    <BienCard
                        key={a.id}
                        id={a.id}
                        titre={a.titre}
                        prix={a.prix}
                        images={a.images}
                        localisation={a.localisation}
                        superficie={a.superficie}
                        chambre={a.chambre}
                        salleDeBain={a.salleDeBain}
                        piscine={a.piscine}
                        salon={a.salon}
                        cuisine={a.cuisine}
                        typeBien={a.typeBien}
                       
                    />
                ))}
            </div>
        </section>
    )
}

export default Bien