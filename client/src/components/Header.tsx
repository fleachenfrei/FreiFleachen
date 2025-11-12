import { useState } from 'react';
import { Link, useLocation, useRouter } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_INFO } from '@/lib/constants';
import { getLocalizedPath } from '@/lib/urlMapping';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const { language, t } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'de' ? 'en' : 'de';
    const newPath = getLocalizedPath(location, newLanguage);
    setLocation(newPath);
  };

  const navItems = [
    { label: t.nav.home, path: language === 'de' ? '/' : '/en' },
    { label: t.nav.services, path: language === 'de' ? '/leistungen' : '/en/services' },
    { label: t.nav.districts, path: language === 'de' ? '/bezirke' : '/en/districts' },
    { label: t.nav.states, path: language === 'de' ? '/bundeslaender' : '/en/federal-states' },
    { label: t.nav.contact, path: language === 'de' ? '/kontakt' : '/en/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={language === 'de' ? '/' : '/en'} className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-primary">Flächen Frei</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.path ? 'text-primary' : 'text-foreground'
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="button-language-toggle"
              className="text-muted-foreground"
            >
              <Globe className="w-5 h-5" />
            </Button>
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
            <a href={`tel:${CONTACT_INFO.phoneLink}`}>
              <Button variant="outline" size="sm" data-testid="button-call-desktop">
                <Phone className="w-4 h-4 mr-2" />
                {t.nav.callNow}
              </Button>
            </a>
            <a href="#kontakt">
              <Button variant="default" size="sm" data-testid="button-quote-desktop" className="bg-secondary text-secondary-foreground hover:bg-secondary">
                {t.nav.getQuote}
              </Button>
            </a>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-4 py-2 rounded-md text-sm font-medium ${
                  location === item.path ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                data-testid="button-language-mobile"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language.toUpperCase()}
              </Button>
              <a href={`tel:${CONTACT_INFO.phoneLink}`}>
                <Button variant="default" size="sm" data-testid="button-call-mobile">
                  <Phone className="w-4 h-4 mr-2" />
                  {t.nav.callNow}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
