import { Link } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { useEffect } from 'react';
import { getBreadcrumbSchema } from '@/lib/seo';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  useEffect(() => {
    const schema = getBreadcrumbSchema([{ name: 'Home', url: '/' }, ...items]);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'breadcrumb-schema';
    script.textContent = JSON.stringify(schema);
    
    const existing = document.getElementById('breadcrumb-schema');
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [items]);

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="breadcrumbs">
        <li className="flex items-center gap-2">
          <Link href="/">
            <a className="hover:text-foreground transition-colors flex items-center gap-1" data-testid="breadcrumb-home">
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </a>
          </Link>
          <ChevronRight className="w-4 h-4" />
        </li>
        {items.map((item, index) => (
          <li key={item.url} className="flex items-center gap-2">
            {index < items.length - 1 ? (
              <>
                <Link href={item.url}>
                  <a className="hover:text-foreground transition-colors" data-testid={`breadcrumb-${index}`}>
                    {item.name}
                  </a>
                </Link>
                <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              <span className="text-foreground font-medium" aria-current="page" data-testid={`breadcrumb-current`}>
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
