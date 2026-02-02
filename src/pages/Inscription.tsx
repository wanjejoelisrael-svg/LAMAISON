import React, { useState } from "react";


// Définition du type TypeScript pour les données du formulaire
interface RegisterFormData {
nom: string;
prenom: string;
email: string;
telephone: string;
statut: string;
motDePasse: string;
confirmationMotDePasse: string;
}


const RegisterForm: React.FC = () => {
// État pour stocker les données du formulaire
const [formData, setFormData] = useState<RegisterFormData>({
nom: "",
prenom: "",
email: "",
telephone: "",
statut: "",
motDePasse: "",
confirmationMotDePasse: "",
});


// État pour afficher les erreurs
const [error, setError] = useState<string>("");


// Fonction appelée à chaque changement dans un champ
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = e.target;


setFormData({
...formData, // on garde les anciennes valeurs
[name]: value, // on met à jour seulement le champ modifié
});
};


// Fonction appelée lors de la soumission du formulaire
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault(); // empêche le rechargement de la page


// Vérification simple des mots de passe
if (formData.motDePasse !== formData.confirmationMotDePasse) {
setError("Les mots de passe ne correspondent pas");
return;
}


setError("");


// Ici, tu pourras envoyer les données vers une API plus tard
console.log("Données envoyées :", formData);
alert("Inscription réussie !");
};

return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
<form
onSubmit={handleSubmit}
className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6 space-y-5"
>
<h2 className="text-2xl font-bold text-center text-amber-500">
Inscription sur LAMAISON
</h2>

{/* Nom */}
<input
type="text"
name="nom"
placeholder="Nom"
value={formData.nom}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>

{/* Prénom */}
<input
type="text"
name="prenom"
placeholder="Prénom"
value={formData.prenom}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>


{/* Email */}
<input
type="email"
name="email"
placeholder="Adresse email"
value={formData.email}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>


{/* Téléphone */}
<input
type="tel"
name="telephone"
placeholder="Téléphone (WhatsApp)"
value={formData.telephone}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>

{/* Statut */}
<input
type="text"
name="statut"
placeholder="Statut (Prospect, Agent)"
value={formData.statut}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>


{/* Mot de passe */}
<input
type="password"
name="motDePasse"
placeholder="Mot de passe"
value={formData.motDePasse}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>


{/* Confirmation mot de passe */}
<input
type="password"
name="confirmationMotDePasse"
placeholder="Confirmer le mot de passe"
value={formData.confirmationMotDePasse}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>


{/* Message d'erreur */}
{error && <p className="text-red-500 text-sm">{error}</p>}


{/* Bouton */}
<button
type="submit"
className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition"
>
S'inscrire
</button>


<p className="text-center text-sm text-gray-500">
En vous inscrivant, vous acceptez les conditions de LAMAISON
</p>
</form>
</div>
);
};


export default RegisterForm;