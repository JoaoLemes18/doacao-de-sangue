export interface DonationLocation {
  name: string;
  image: any;
  link: string;
  linkText: string;
  description: string;
}

export const donationLocations: DonationLocation[] = [
  {
    name: "Hemocentro de Cuiabá",
    image:
      "https://www.sonoticias.com.br/wp-content/uploads/2023/11/MT-Hemocentro-Fachada.jpg",
    link: "https://mthemocentro.saude.mt.gov.br/",
    linkText: "Agende aqui a sua doação!",
    description: " Rua 13 Junho, 1055 Centro Sul - Cuiabá/MT",
  },
  {
    name: "Ihemco - Banco de Sangue",
    image:
      "https://s2-g1.glbimg.com/IzqH1GkJO6ZFkeX56rQsvZCuab8=/0x0:1600x739/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/d/j/wJWTmZTdAua7nYB0J1kA/whatsapp-image-2023-02-14-at-19.30.13.jpeg",
    link: "https://www.ihemco.com.br/",
    linkText: "Marque por aqui a sua doação",
    description:
      "Anexo a Santa Casa de Misericórdia de Cuiabá Praça Bispo Dom José - Cuiabá-MT",
  },
  {
    name: "Centro de Hematologia e Hemoterapia - HEMOSAN",
    image:
      "https://santa-helena-mt.mybrazilinfo.com/img/companies/0/8/84/844/8449.jpg",
    link: "https://www.instagram.com/hemosan_/",
    linkText: "Saiba mais por aqui",
    description: "R. Maria do Carmo Rêgo - Santa Helena, Cuiabá ",
  },
];
