'use client';

import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export default function Home() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nothing Factory',
    description: 'A creative collective of builders & makers imagining audacious digital experiences and products!',
    url: 'https://nothingfactory.xyz',
    logo: 'https://nothingfactory.xyz/nothing-factory-logo.png',
    sameAs: [
      'https://github.com/nothingfactory',
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header>
        <div className="h-10 w-10 rounded-lg">
          <img src="/nothing-factory-logo.png" alt="The Nothing Factory Icon" />
        </div>
      </header>
      <main className="mt-8">
        <h1 className="font-medium text-base">Nothing Factory</h1>
        <p className="opacity-60">just a few builders makin somthing out of nothing!</p>

        <ThemeSwitcher className="fixed bottom-4 left-4" />
      </main>
    </>
  );
}
