import React, { useState } from "react";
import { Link } from "react-router";


// Interface TypeScript pour typer les données du formulaire de connexion
interface LoginFormData {
email: string;
motDePasse: string;
}


const LoginForm: React.FC = () => {
// État pour stocker les informations saisies par l'utilisateur
const [formData, setFormData] = useState<LoginFormData>({
email: "",
motDePasse: "",
});


// État pour afficher les erreurs
const [error, setError] = useState<string>("");

// Fonction déclenchée quand l'utilisateur tape dans un champ
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = e.target;


setFormData({
...formData,
[name]: value,
});
};


// Fonction déclenchée lors de la soumission du formulaire
const handleSubmit = (e: React.FormEvent) => {
e.preventDefault(); // Empêche le rechargement de la page


// Vérification simple
if (!formData.email || !formData.motDePasse) {
setError("Veuillez remplir tous les champs");
return;
}

setError("");


// Ici, on enverra les données vers le backend (API)
console.log("Connexion avec :", formData);
alert("Connexion réussie ✅");
};


return (
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
<form
onSubmit={handleSubmit}
className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-5"
>
<h2 className="text-2xl font-bold text-center text-amber-500">
Connexion à LAMAISON
</h2>

{/* Champ Email */}
<input
type="email"
name="email"
placeholder="Adresse email"
value={formData.email}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>


{/* Champ Mot de passe */}
<input
type="password"
name="motDePasse"
placeholder="Mot de passe"
value={formData.motDePasse}
onChange={handleChange}
required
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
/>


{/* Message d'erreur */}
{error && <p className="text-red-500 text-sm">{error}</p>}


{/* Bouton de connexion */}
<button
type="submit"
className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition"
>
Se connecter
</button>

{/* Liens utiles */}
<div className="text-center text-sm text-gray-500 space-y-2">
<p className="hover:underline cursor-pointer">Mot de passe oublié ?</p>
<p>
Pas encore de compte ?{" "}
<span className="text-amber-500 hover:underline cursor-pointer">
    <Link to="/inscription">S'inscrire</Link>
</span>
</p>
</div>
</form>
</div>
);
};


export default LoginForm;