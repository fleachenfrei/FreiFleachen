import { Link } from 'wouter';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const { t, language } = useLanguage();
  const servicesPath = language === 'de' ? '/leistungen' : '/en/services';
  const districtsPath = language === 'de' ? '/bezirke' : '/en/districts';

  const districts = [
    '1010 Wien Innere Stadt',
    '1020 Wien Leopoldstadt',
    '1030 Wien Landstraße',
    '1100 Wien Favoriten',
    '1110 Wien Simmering',
    '1120 Wien Meidling',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Flächen Frei</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              {t.footer.companyDescription}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4" data-testid="text-footer-services">
              {t.footer.services}
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link href={servicesPath} className="hover:text-primary-foreground">{language === 'de' ? 'Wohnungsräumung' : 'Apartment Clearing'}</Link></li>
              <li><Link href={servicesPath} className="hover:text-primary-foreground">{language === 'de' ? 'Hausräumung' : 'House Clearing'}</Link></li>
              <li><Link href={servicesPath} className="hover:text-primary-foreground">{language === 'de' ? 'Verlassenschaft' : 'Estate Clearing'}</Link></li>
              <li><Link href={servicesPath} className="hover:text-primary-foreground">{language === 'de' ? 'Transport' : 'Transport'}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" data-testid="text-footer-districts">
              {t.footer.districts}
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {districts.slice(0, 4).map((district, i) => (
                <li key={i}>
                  <Link href={`${districtsPath}/${district.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary-foreground">
                    {district}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4" data-testid="text-footer-contact">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={`tel:${CONTACT_INFO.phoneLink}`} className="hover:text-primary-foreground">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={CONTACT_INFO.emailLink} className="hover:text-primary-foreground">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Herndlgasse 7/17, 1100 Wien</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
          <p data-testid="text-footer-copyright">{t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="/datenschutz" className="hover:text-primary-foreground">{t.footer.privacy}</Link>
            <Link href="/impressum" className="hover:text-primary-foreground">{t.footer.imprint}</Link>
            <Link href="/agb" className="hover:text-primary-foreground">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
