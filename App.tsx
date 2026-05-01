import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FlavorSection from './components/FlavorSection';
import PricingSection from './components/PricingSection';
import StorySection from './components/StorySection';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream font-sans selection:bg-terracotta selection:text-white">
      <Header />
      <main>
        <Hero />
        <FlavorSection />
        <PricingSection />
        <StorySection />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;