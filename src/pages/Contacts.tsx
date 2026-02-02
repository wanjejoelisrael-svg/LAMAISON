import React, { useState } from "react";

// Interface TypeScript pour typer les données du formulaire de contact
interface ContactFormData {
  nom: string;
  email: string;
  telephone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  // État pour gérer les messages de succès ou d'erreur
  const [status, setStatus] = useState<string>("");

  // Fonction appelée lorsqu'un champ change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction appelée lors de l'envoi du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Vérification simple
    if (!formData.nom || !formData.email || !formData.message) {
      setStatus("Veuillez remplir les champs obligatoires");
      return;
    }

    // Ici on pourra envoyer les données à une API ou par email
    console.log("Message envoyé :", formData);

    setStatus("Votre message a été envoyé avec succès ✅");

    // Réinitialisation du formulaire
    setFormData({
      nom: "",
      email: "",
      telephone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-amber-500 mb-6">
          Contactez LAMAISON
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nom */}
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Téléphone */}
          <input
            type="tel"
            name="telephone"
            placeholder="Téléphone (optionnel)"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {/* Message de statut */}
          {status && (
            <p className="text-center text-sm text-green-600">{status}</p>
          )}

          {/* Bouton */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Envoyer le message
          </button>
        </form>

        {/* Informations de contact */}
        <div className="mt-6 text-center text-sm text-gray-500 space-y-1">
          <p>Email : info@lamaison.cm</p>
          <p>Téléphone / WhatsApp : +237 690 460 366 / 678 78 36 84</p>
          <p>Siège : Yaoundé, Cameroun</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
