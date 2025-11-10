import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import jonasImage from '@assets/generated_images/Customer_testimonial_Jonas_4fad6f53.png';
import marcelImage from '@assets/generated_images/Customer_testimonial_Marcel_4b3a0d9e.png';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Jonas M.',
      rating: 5,
      text: 'Top-Service! Ich bin begeistert von der professionellen und zuverlässigen Arbeit von Flächen Frei. Das Team war pünktlich, freundlich und hat meine Wohnung blitzschnell entrümpelt. Ich kann sie jedem wärmstens empfehlen!',
      image: jonasImage,
    },
    {
      name: 'Marcel R.',
      rating: 5,
      text: 'Absolut empfehlenswert! Ich habe Flächen Frei für die Räumung meines Elternhauses engagiert und bin rundum zufrieden. Das Team war äußerst professionell, respektvoll und effizient. Sie haben einen herausragenden Job gemacht!',
      image: marcelImage,
    },
    {
      name: 'Sarah K.',
      rating: 5,
      text: 'Schnelle und unkomplizierte Abwicklung! Die Kellerentrümpelung wurde professionell durchgeführt und das Ergebnis war perfekt. Faire Preise und freundlicher Service. Sehr zu empfehlen!',
      image: jonasImage,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-testimonials-subtitle">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-testimonial-${index}`}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold" data-testid={`text-testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic" data-testid={`text-testimonial-text-${index}`}>
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
