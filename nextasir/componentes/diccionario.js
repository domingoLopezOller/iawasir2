const dictionaries = {
    en: {
      title: 'Welcome to my multilingual page',
      description: 'This is a simple page that can be translated into Spanish and English.',
      home:'Home',
      esperando:'Waiting 3s'
    },
    es: {
      title: 'Bienvenido a mi página multilingüe',
      description: 'Esta es una página sencilla que se puede traducir al español y al inglés.',
      home:'Inicio',
      esperando:'Esperando 3s'
    },
  }
  export const getDictionary = (lang) => dictionaries[lang ]