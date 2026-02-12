import { Hero } from './components/Hero';
import { FeaturedCollections } from './components/FeaturedCollections';
import { Craftsmanship } from './components/Craftsmanship';
import { Testimonials } from './components/Testimonials';
import { WhyChoose } from './components/WhyChoose';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { PageLoader } from './components/PageLoader';
import { ImageWithFallback } from './components/common/ImageWithFallback';


export default function App() {
  return (
    <div className="min-h-screen bg-black lg:cursor-none">
      <PageLoader />
      <CustomCursor />
      <Navigation />
      <Hero />
      <FeaturedCollections />
      <Craftsmanship />
      <Testimonials />
      <WhyChoose />
      <Footer />
    </div>
  );
}