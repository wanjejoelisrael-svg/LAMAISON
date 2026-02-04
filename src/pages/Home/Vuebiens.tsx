import BienCard from '../../components/BienCard';
import { biensMock } from '../../lib/mock';

export default function Vuebiens() {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {biensMock.slice(0, 6).map((bien) => (
                    <BienCard
                        key={bien.id}
                        id={bien.id}
                        titre={bien.titre}
                        prix={bien.prix}
                        images={bien.images}
                        localisation={bien.localisation}
                        superficie={bien.superficie}
                        chambre={bien.chambre}
                        salleDeBain={bien.salleDeBain}
                        piscine={bien.piscine}
                        salon={bien.salon}
                        cuisine={bien.cuisine}
                        typeBien={bien.typeBien}

                    />
                ))}
            </div>
        </div>
    )
}
