import { AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedHomePath, getLocalizedContactPath } from "@/lib/urlMapping";

export default function NotFound() {
  const { t, language } = useLanguage();
  const homePath = getLocalizedHomePath(language);
  const contactPath = getLocalizedContactPath(language);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex min-h-[70vh] items-center justify-center">
        <div className="w-full max-w-md px-4">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="rounded-full bg-destructive/10 p-4">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">
              404
            </h1>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">
                {t.notFound.title}
              </h2>
              <p className="text-muted-foreground">
                {t.notFound.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href={homePath}>
                <Button size="lg" data-testid="button-back-home">
                  {t.notFound.backToHome}
                </Button>
              </Link>
              <Link href={contactPath}>
                <Button size="lg" variant="outline" data-testid="button-contact">
                  {t.notFound.contact}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
