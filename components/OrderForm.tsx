import React, { useState } from 'react';
import { PACKS } from '../constants';
import { OrderFormData } from '../types';
import { Send, CheckCircle } from 'lucide-react';

const OrderForm: React.FC = () => {
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: '',
    lastName: '',
    phone: '',
    pack: 'decouverte',
    quantity: 1,
    location: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form eventually? 
      // setFormData(...)
    }, 800);
  };

  return (
    <section id="order" className="py-24 px-4 bg-gradient-to-br from-ochre/10 to-terracotta/10">
      <div className="container mx-auto max-w-3xl">
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-forest p-8 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-2">Passez Commande</h2>
            <p className="text-white/70">Remplissez le formulaire, on s'occupe du reste.</p>
          </div>

          <div className="p-8 md:p-12">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10 animate-fadeIn">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-display font-bold text-forest mb-4">C'est dans la boîte !</h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto">
                  Merci {formData.firstName} ! Votre commande a bien été reçue. Notre équipe va vous contacter au {formData.phone} très rapidement pour la livraison.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-terracotta font-semibold underline hover:text-forest"
                >
                  Passer une autre commande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-forest uppercase tracking-wide">Prénom</label>
                    <input
                      required
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-terracotta focus:ring-0 outline-none transition-colors bg-gray-50"
                      placeholder="Nic"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-forest uppercase tracking-wide">Nom</label>
                    <input
                      required
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-terracotta focus:ring-0 outline-none transition-colors bg-gray-50"
                      placeholder="Manioc"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-forest uppercase tracking-wide">Téléphone / WhatsApp</label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-terracotta focus:ring-0 outline-none transition-colors bg-gray-50"
                    placeholder="+229 97 00 00 00"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="pack" className="text-sm font-semibold text-forest uppercase tracking-wide">Choix du Pack</label>
                    <select
                      id="pack"
                      name="pack"
                      value={formData.pack}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-terracotta focus:ring-0 outline-none transition-colors bg-gray-50 appearance-none"
                    >
                      {PACKS.map(pack => (
                        <option key={pack.id} value={pack.id}>
                          {pack.name} - {pack.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="quantity" className="text-sm font-semibold text-forest uppercase tracking-wide">Quantité</label>
                    <input
                      required
                      type="number"
                      min="1"
                      max="50"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-terracotta focus:ring-0 outline-none transition-colors bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-semibold text-forest uppercase tracking-wide">Lieu de livraison</label>
                  <input
                    required
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-100 focus:border-terracotta focus:ring-0 outline-none transition-colors bg-gray-50"
                    placeholder="Quartier, Ville, Indication..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-terracotta text-white font-bold text-lg py-4 rounded-xl hover:bg-forest transition-colors shadow-lg shadow-terracotta/30 flex items-center justify-center gap-2 mt-4"
                >
                  <Send size={20} />
                  Valider ma commande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;