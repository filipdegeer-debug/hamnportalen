export const ports = [
  {
    namn: 'Sundsvall Oljehamn',
    hamnanlaggning: 'SEDTS003',

    // Operatör
    operatör: 'Sundsvall Hamn AB',

    // NCM-kund
    kund: true,

    // Grunddata
    gatuadress: 'Skepparegatan 9\n852 34 Sundsvall',
    gisis: '',

    // Position
    latitud: 62.385458,
    longitud: 17.352456,

    // Säkerhet
    skyddsniva: 1,

    // Kontakt
    pfso: 'Leif Winsten',
    pfsoTelefon: '1234567',
    pfsoEmail: 'pahittadmail@gmail.com',

    // PFSP
    pfspInskickad: '2026-08-11',
    pfspGodkandTill: '2031-08-11',

    // Dokument
    dokument: [
      'PFSP.pdf',
      'PFSA.docx',
      'Internrevision.pdf',
    ],

    // Anteckningar
    anteckningar:
      'Exempel på anteckning. Här kommer konsultens egna noteringar att visas.',

    kommentar: '',
  },

  {
    namn: 'Testhamn',
    hamnanlaggning: 'TEST001',

    operatör: 'Testhamn AB',

    kund: false,

    gatuadress: 'Exempelgatan 1\n411 00 Göteborg',
    gisis: '',

    latitud: 57.7089,
    longitud: 11.9746,

    skyddsniva: 1,

    pfso: '',
    pfsoTelefon: '',
    pfsoEmail: '',

    pfspInskickad: '',
    pfspGodkandTill: '',

    dokument: [],

    anteckningar: '',

    kommentar: '',
  },
]