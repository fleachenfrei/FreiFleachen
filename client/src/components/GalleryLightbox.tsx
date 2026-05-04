import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentImage = images[currentIndex];
  const [imageLoaded, setImageLoaded] = useState(false);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setImageLoaded(false);
    onNavigate(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setImageLoaded(false);
    onNavigate(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  if (!currentImage) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-[98vw] w-full h-[98vh] p-0 bg-black border-0 overflow-hidden"
        data-testid="dialog-gallery-lightbox"
      >
        <VisuallyHidden>
          <DialogTitle>{currentImage.title}</DialogTitle>
          <DialogDescription>
            Gallery image {currentIndex + 1} of {images.length}
          </DialogDescription>
        </VisuallyHidden>
        
        <div className="relative w-full h-full flex flex-col">
          {/* Header with close button and counter */}
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <span className="text-white font-semibold text-sm">
                  {currentIndex + 1}
                </span>
                <span className="text-white/60 text-sm">/</span>
                <span className="text-white/80 text-sm">{images.length}</span>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white h-10 w-10 rounded-full"
              onClick={onClose}
              data-testid="button-close-lightbox"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Main image area */}
          <div className="flex-1 relative flex items-center justify-center px-24 py-20">
            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white h-14 w-14 rounded-full transition-all duration-300"
              onClick={goToPrevious}
              data-testid="button-previous-image"
            >
              <ChevronLeft className="w-7 h-7" />
            </Button>

            {/* Image with fade transition */}
            <div className="relative max-w-full max-h-full flex items-center justify-center">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className={`max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl transition-opacity duration-500 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                data-testid="img-lightbox-current"
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white h-14 w-14 rounded-full transition-all duration-300"
              onClick={goToNext}
              data-testid="button-next-image"
            >
              <ChevronRight className="w-7 h-7" />
            </Button>
          </div>

          {/* Bottom section with caption and thumbnails */}
          <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/90 via-black/60 to-transparent pb-6 pt-12">
            {/* Caption */}
            <div className="text-center mb-6 px-6">
              <h3 
                className="text-white text-2xl font-semibold mb-1 drop-shadow-lg" 
                data-testid="text-lightbox-title"
              >
                {currentImage.title}
              </h3>
            </div>

            {/* Thumbnail strip */}
            <div className="flex items-center justify-center gap-2 px-6 overflow-x-auto scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setImageLoaded(false);
                    onNavigate(index);
                  }}
                  className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? 'ring-2 ring-white scale-110 opacity-100'
                      : 'ring-1 ring-white/30 opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                  data-testid={`thumbnail-${index}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-white/20" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
              data-testid="progress-bar"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
