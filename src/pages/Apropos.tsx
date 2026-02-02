import React from "react";

const Apropos: React.FC = () => {
  return (
    <main className="w-full bg-gray-50 text-gray-800">
      
      <section className="bg-yellow-500 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Découvrez LAMAISON
          </h1>
          <p className="text-lg md:text-xl">
            Votre agence immobilière de confiance au Cameroun
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="leading-relaxed mb-4">
              <strong>LAMAISON</strong> est une entreprise immobilière basée au
              Cameroun, spécialisée dans la vente et la location de biens immobiliers.
            </p>
            <p className="leading-relaxed">
              LAMAISON vous accompagne dans votre recherche, publication, location et vente des 
              biens immobiliers de manière professionnelle
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">
              Nos domaines d’expertise
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>Vente de terrains et maisons</li>
              <li>Location d’appartements et villas</li>
              <li>Conseil et accompagnement juridique</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Nos valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Confiance</h3>
              <p>
                Nous construisons des relations durables basées sur la
                transparence et l’honnêteté.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Professionnalisme</h3>
              <p>
                Une équipe expérimentée pour vous offrir un service de qualité.
                Elle vous accompagne avant, pendant et après l'achat, la location ou la vente.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>
                Une plateforme moderne accessible sur web.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Où nous trouver ?
          </h2>
          <p className="text-lg">
            📍 Siège social situé à <strong>Yaoundé, Cameroun, Avenue Churchill</strong>
          </p>
        </div>
      </section>

    </main>
  );
};

export default Apropos;
