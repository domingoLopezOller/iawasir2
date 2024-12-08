const dictionaries = {
    en: {
    title: 'Welcome to my multilingual page',
    description: 'This is a simple page that can be translated into Spanish and English.',
    },
    es: {
    title: 'Bienvenido a mi página multilingüe',
    description: 'Esta es una página sencilla que se puede traducir al español, inglés y frances.',
    },
    fr: {
    title: 'Bienvenue sur ma page multilingue',
    description: 'Il s`agit d`une page simple qui peut être traduite en espagnol, anglais et français.',
    }
   }
   
   export const getDictionary = (lang) => dictionaries[lang ]

  