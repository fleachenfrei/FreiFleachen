import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import GalleryLightbox from '@/components/GalleryLightbox';
import cleaningTeamImage from '@assets/stock_images/professional_cleanin_4637ab2e.jpg';
import cleanApartmentImage from '@assets/stock_images/empty_clean_apartmen_62f7696d.jpg';
import basementImage from '@assets/stock_images/basement_storage_roo_2b9b9feb.jpg';
import atticImage from '@assets/stock_images/attic_filled_with_ol_b8093225.jpg';
import moversImage from '@assets/stock_images/professional_movers__6fd4f61d.jpg';
import antiqueExpertImage from '@assets/stock_images/antique_expert_appra_c4e20bd9.jpg';

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    {
      src: cleaningTeamImage,
      alt: 'Professional clearing team at work',
      title: t.gallery?.image1Title || 'Professionelles Team',
    },
    {
      src: cleanApartmentImage,
      alt: 'Clean apartment after clearance',
      title: t.gallery?.image2Title || 'Besenreine Übergabe',
    },
    {
      src: basementImage,
      alt: 'Basement clearance service',
      title: t.gallery?.image3Title || 'Kellerräumung',
    },
    {
      src: atticImage,
      alt: 'Attic clearance',
      title: t.gallery?.image4Title || 'Dachbodenräumung',
    },
    {
      src: moversImage,
      alt: 'Professional movers packing',
      title: t.gallery?.image5Title || 'Umzugsservice',
    },
    {
      src: antiqueExpertImage,
      alt: 'Antique expert appraisal',
      title: t.gallery?.image6Title || 'Ankauf & Bewertung',
    },
  ];

  return (
    <section className="py-16 bg-muted/30" data-testid="section-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-gallery-title">
            {t.gallery?.title || 'Unsere Arbeit in Bildern'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-subtitle">
            {t.gallery?.subtitle || 'Ein Blick sagt mehr als tausend Worte - sehen Sie selbst, wie wir Platz schaffen!'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-lg overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
              onClick={() => {
                setCurrentImageIndex(index);
                setLightboxOpen(true);
              }}
              data-testid={`gallery-item-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-lg" data-testid={`text-gallery-item-title-${index}`}>
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <GalleryLightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </section>
  );
}
