// Configuración Global de la Tienda
const STORE_CONFIG = {
  storeName: "Ombú Ropa de Trabajo (Reseller)",
  whatsappNumber: "5491157003273", // Número destino sin espacios ni símbolos
  currency: "$",
  whatsappGreeting: "¡Hola! Quisiera consultar/hacer un pedido para los siguientes artículos de trabajo:",
};

// Catálogo de Productos con rutas a imágenes del catálogo (formato: pagina (X).jpg)
const PRODUCT_CATALOG = [
  // --- INDUMENTARIA OMBÚ ---
  {
    id: "55000",
    name: "Pantalón Ombú Clásico",
    category: "Indumentaria Ombú",
    image: "images/pagina (5).jpg", // Página 5 del PDF
    description: "Pantalón de trabajo Ombú clásico, confeccionado en tela resistente. Cuenta con botón y cierre para acceso, bolsillos delanteros y traseros plaque.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Azulino", code: "#3a75c4" },
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Beige", code: "#d2b48c" },
      { name: "Blanco", code: "#ffffff" },
      { name: "Verde Oliva", code: "#556b2f" }
    ],
    features: [
      "Botón y cierre metálico para acceso a la prenda.",
      "Dos bolsillos traseros plaque.",
      "Dos bolsillos delanteros profundos."
    ],
    sizeGuide: {
      headers: ["Talle", "Cintura", "Cadera", "Largo de Pierna", "Largo Total"],
      rows: [
        ["40", "40 cm", "51 cm", "82 cm", "107,5 cm"],
        ["42", "42 cm", "53 cm", "82 cm", "108 cm"],
        ["44", "44 cm", "55 cm", "82 cm", "108,5 cm"],
        ["46", "46 cm", "57 cm", "82 cm", "109 cm"],
        ["48", "48 cm", "59 cm", "82 cm", "109,5 cm"],
        ["50", "50 cm", "61 cm", "82 cm", "110 cm"],
        ["52", "52 cm", "63 cm", "83 cm", "110,5 cm"],
        ["54", "54 cm", "65 cm", "83 cm", "111 cm"]
      ]
    }
  },
  {
    id: "55909",
    name: "Camisa con Reflectivos Ombú",
    category: "Indumentaria Ombú",
    image: "images/pagina (7).jpg", // Página 7 del PDF
    description: "Camisa de trabajo de alta visibilidad con tiras reflectivas reglamentarias. Ideal para trabajos viales y nocturnos.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Beige", code: "#d2b48c" }
    ],
    features: [
      "Cartera con botones central para acceso a la prenda.",
      "Bolsillos delanteros con botón de acceso.",
      "Puño ajustable con botón y ojal.",
      "Tiras reflectivas reglamentarias en pecho, espalda y mangas."
    ],
    sizeGuide: {
      headers: ["Talle etiqueta", "Equiv.", "Ancho Pecho", "Ancho Hombro", "Largo", "Largo Manga"],
      rows: [
        ["38", "XS", "60 cm", "47 cm", "78 cm", "63 cm"],
        ["40", "S", "62 cm", "49 cm", "79 cm", "63,5 cm"],
        ["42", "M", "64 cm", "51 cm", "79 cm", "63,5 cm"],
        ["44", "L", "66 cm", "53 cm", "79 cm", "64 cm"],
        ["46", "XL", "68 cm", "55 cm", "80 cm", "64,5 cm"],
        ["48", "XL", "71 cm", "57 cm", "80 cm", "64 cm"],
        ["50", "2XL", "74 cm", "59 cm", "80 cm", "65 cm"],
        ["52", "2XL", "77 cm", "61 cm", "81 cm", "65 cm"],
        ["54", "3XL", "80 cm", "63 cm", "81,5 cm", "65,5 cm"]
      ]
    }
  },
  {
    id: "55500",
    name: "Camisa Ombú 100% Algodón",
    category: "Indumentaria Ombú",
    image: "images/pagina (7).jpg", // Página 7 del PDF
    description: "Camisa clásica de trabajo confeccionada en gabardina de puro algodón para máxima comodidad y respirabilidad.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54"],
    colores: [
      { name: "Azulino", code: "#3a75c4" },
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Beige", code: "#d2b48c" },
      { name: "Blanco", code: "#ffffff" },
      { name: "Verde Oliva", code: "#556b2f" }
    ],
    features: [
      "Tejido 100% algodón resistente.",
      "Cartera central con botones.",
      "Dos bolsillos delanteros plaque.",
      "Puños con botón ajustable."
    ],
    sizeGuide: {
      headers: ["Talle etiqueta", "Equiv.", "Ancho Pecho", "Ancho Hombro", "Largo", "Largo Manga"],
      rows: [
        ["38", "XS", "60 cm", "47 cm", "78 cm", "63 cm"],
        ["40", "S", "62 cm", "49 cm", "79 cm", "63,5 cm"],
        ["42", "M", "64 cm", "51 cm", "79 cm", "63,5 cm"],
        ["44", "L", "66 cm", "53 cm", "79 cm", "64 cm"],
        ["46", "XL", "68 cm", "55 cm", "80 cm", "64,5 cm"],
        ["48", "XL", "71 cm", "57 cm", "80 cm", "64 cm"],
        ["50", "2XL", "74 cm", "59 cm", "80 cm", "65 cm"],
        ["52", "2XL", "77 cm", "61 cm", "81 cm", "65 cm"],
        ["54", "3XL", "80 cm", "63 cm", "81,5 cm", "65,5 cm"]
      ]
    }
  },
  {
    id: "55502",
    name: "Chomba Ombú Gabardina Liviana",
    category: "Indumentaria Ombú",
    image: "images/pagina (9).jpg", // Página 9 del PDF
    description: "Chomba tipo polo premium. Confeccionada en tejido de gabardina liviana de algodón con laterales elásticos para mayor ventilación y movilidad.",
    talles: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Gris", code: "#808080" }
    ],
    features: [
      "Cuello tipo polo con botones.",
      "Termofusionado reflectivo en mangas.",
      "Confeccionada en gabardina liviana 100% algodón.",
      "Morley en los laterales para mayor movilidad y respiración."
    ],
    sizeGuide: {
      headers: ["Medida", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
      rows: [
        ["Ancho Sisa (A)", "50 cm", "52 cm", "54 cm", "56 cm", "58 cm", "60 cm", "62 cm"],
        ["Largo (B)", "69 cm", "71 cm", "73 cm", "75 cm", "77 cm", "79 cm", "81 cm"],
        ["Hombros (C)", "43 cm", "45 cm", "47 cm", "49 cm", "51 cm", "53 cm", "55 cm"],
        ["Manga (D)", "19,5 cm", "20 cm", "20,5 cm", "21 cm", "21,5 cm", "22 cm", "22,5 cm"]
      ]
    }
  },
  {
    id: "55912",
    name: "Pantalón Cargo con Bolsillo Celular",
    category: "Indumentaria Ombú",
    image: "images/pagina (11).jpg", // Página 11 del PDF
    description: "Pantalón cargo de alta resistencia con multibolsillos, incluyendo un bolsillo porta-celular dedicado. Ideal para tareas logísticas y de campo.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Beige", code: "#d2b48c" }
    ],
    features: [
      "Bolsillo portacelular de acceso rápido.",
      "Bolsillos laterales con fuelle y abrojo velcro.",
      "Bolsillos traseros plaque con tapa.",
      "Cintura con pasacinto y bragueta con cremallera."
    ],
    sizeGuide: {
      headers: ["Medida / Talle", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
      rows: [
        ["Cintura (A)", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"],
        ["Largo Total (B)", "109", "109", "109", "110", "110", "110", "111", "111", "111", "112", "112", "112"],
        ["Largo Entrepierna", "84", "84", "84", "84", "84", "84", "84", "84", "84", "84", "84", "84"]
      ]
    }
  },
  {
    id: "55908",
    name: "Pantalón con Reflectivos Ombú",
    category: "Indumentaria Ombú",
    image: "images/pagina (13).jpg", // Página 13 del PDF
    description: "Pantalón de trabajo reglamentario con bandas reflectivas en las piernas. Cintura clásica con pasacinto.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Beige", code: "#d2b48c" }
    ],
    features: [
      "Bandas reflectivas en botamangas.",
      "Botón metálico de acceso.",
      "Bolsillos traseros tipo ojal con botón.",
      "Bolsillos delanteros profundos."
    ],
    sizeGuide: {
      headers: ["Talle", "Cintura", "Cadera", "Largo de Pierna", "Largo Total"],
      rows: [
        ["40", "40 cm", "51 cm", "82 cm", "107,5 cm"],
        ["42", "42 cm", "53 cm", "82 cm", "108 cm"],
        ["44", "44 cm", "55 cm", "82 cm", "108,5 cm"],
        ["46", "46 cm", "57 cm", "82 cm", "109 cm"],
        ["48", "48 cm", "59 cm", "82 cm", "109,5 cm"],
        ["50", "50 cm", "61 cm", "82 cm", "110 cm"],
        ["52", "52 cm", "63 cm", "83 cm", "110,5 cm"],
        ["54", "54 cm", "65 cm", "83 cm", "111 cm"]
      ]
    }
  },
  {
    id: "55004-10",
    name: "Pantalón Cargo Strauss Elastizado",
    category: "Indumentaria Ombú",
    image: "images/pagina (15).jpg", // Página 15 del PDF
    description: "Línea premium Strauss. Elaborado en tejido sarga work stretch ultra resistente y cómodo con ventilación lateral y bandas reflectivas.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" }
    ],
    features: [
      "Tejido sarga work stretch microesmerilado (98% algodón, 2% elastano).",
      "Bolsillo lateral porta-objetos y un bolsillo cargo amplio con tapa.",
      "Bandas reflectivas integradas.",
      "Zonas de respiración lateral."
    ],
    sizeGuide: {
      headers: ["Talle", "Cintura (aprox)", "Largo de Pierna", "Largo Total"],
      rows: [
        ["40", "40 cm", "82 cm", "108 cm"],
        ["42", "42 cm", "82 cm", "108 cm"],
        ["44", "44 cm", "82 cm", "109 cm"],
        ["46", "46 cm", "82 cm", "109 cm"],
        ["48", "48 cm", "82 cm", "110 cm"],
        ["50", "50 cm", "82 cm", "110 cm"]
      ]
    }
  },
  {
    id: "58062",
    name: "Bombacha de Campo Ombú",
    category: "Indumentaria Ombú",
    image: "images/pagina (16).jpg", // Página 16 del PDF
    description: "Bombacha de campo tradicional de alta durabilidad. Perfecta para tareas rurales y uso diario al aire libre.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Verde Oliva", code: "#556b2f" },
      { name: "Beige", code: "#d2b48c" }
    ],
    features: [
      "Bolsillos traseros con traba a botón.",
      "Cintura con pasacintos reforzados.",
      "Pinzas clásicas de bombacha de campo."
    ],
    sizeGuide: {
      headers: ["Talle", "Cintura (A)", "Largo Total (B)", "Tiro Del. (C)", "Largo Entrep. (F)"],
      rows: [
        ["38", "36 cm", "101 cm", "31 cm", "73 cm"],
        ["40", "38 cm", "101 cm", "31 cm", "73 cm"],
        ["42", "40 cm", "101 cm", "31 cm", "73 cm"],
        ["44", "42 cm", "102 cm", "32 cm", "74 cm"],
        ["46", "44 cm", "103 cm", "32 cm", "74 cm"],
        ["48", "46 cm", "103 cm", "32 cm", "74 cm"],
        ["50", "48 cm", "104 cm", "33 cm", "74 cm"],
        ["52", "50 cm", "105 cm", "34 cm", "74 cm"],
        ["54", "51 cm", "105 cm", "35 cm", "74,5 cm"]
      ]
    }
  },
  {
    id: "68077",
    name: "Faja Lumbar de Seguridad",
    category: "Indumentaria Ombú",
    image: "images/pagina (18).jpg", // Página 18 del PDF
    description: "Faja lumbar ergonómica para protección en levantamiento de cargas. Previene lesiones y mejora la postura del operario.",
    talles: ["S", "M", "L", "XL", "2XL"],
    colores: [
      { name: "Negro", code: "#000000" }
    ],
    features: [
      "Tiradores elásticos regulables and malla elastizada transpirable.",
      "Bandas laterales de doble ajuste regulable.",
      "Ballenas con cinta antideslizante interna.",
      "Velcro de alta resistencia y durabilidad."
    ],
    sizeGuide: null
  },
  {
    id: "55904",
    name: "Capa de Lluvia Impermeable",
    category: "Indumentaria Ombú",
    image: "images/pagina (19).jpg", // Página 19 del PDF
    description: "Capa de lluvia fabricada en poliéster con recubrimiento de PVC de 32 micrones. Totalmente impermeable y reforzada.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Amarillo", code: "#ffd700" }
    ],
    features: [
      "Costuras cosidas y selladas térmicamente.",
      "Capucha desmontable con cordón de ajuste.",
      "Bolsillos delanteros con solapa anti-agua.",
      "Acceso rápido con botones a presión."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL"],
      rows: [
        ["Pecho (A)", "130 cm", "132 cm", "137 cm", "142 cm", "142 cm", "152 cm"],
        ["Largo Manga (B)", "78 cm", "80 cm", "82 cm", "83 cm", "85 cm", "87 cm"],
        ["Largo Total (C)", "90 cm", "90 cm", "90 cm", "90 cm", "90 cm", "90 cm"]
      ]
    }
  },
  {
    id: "55905",
    name: "Traje Ejecutivo de Agua (Conjunto)",
    category: "Indumentaria Ombú",
    image: "images/pagina (21).jpg", // Página 21 del PDF
    description: "Conjunto impermeable de chaqueta y pantalón. Textura suave, liviana y altamente protectora contra lluvias copiosas.",
    talles: ["M", "L", "XL", "2XL", "3XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" }
    ],
    features: [
      "Chaqueta con capucha fija incorporada al cuello.",
      "Ventilación pasiva en axilas y espalda.",
      "Pantalón con elástico cómodo en la cintura.",
      "Doble ajuste en puño (elástico y abrojo) y botamanga con broche."
    ],
    sizeGuide: null
  },
  {
    id: "55070",
    name: "Medias Térmicas de Lana Ombú",
    category: "Indumentaria Ombú",
    image: "images/pagina (22).jpg", // Página 22 del PDF
    description: "Medias térmicas de caña alta confeccionadas con lana acrílica y spandex. Ideales para zonas frías o uso con calzado de seguridad.",
    talles: ["M (36-39)", "L (40-42)", "XL (43-46)"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Gris", code: "#808080" }
    ],
    features: [
      "Composición: 80% lana acrílica, 15% spandex, 5% poliamida.",
      "Puño antideslizante y costura invisible en puntera.",
      "Talón y puntera reforzados con planta soft acolchada."
    ],
    sizeGuide: {
      headers: ["Talle", "Equivalencia de Calzado"],
      rows: [
        ["M", "36 al 39"],
        ["L", "40 al 42"],
        ["XL", "43 al 46"]
      ]
    }
  },
  {
    id: "55071",
    name: "Plantilla Ergonómica Confort P.U.",
    category: "Indumentaria Ombú",
    image: "images/pagina (24).jpg", // Página 24 del PDF
    description: "Plantillas ergonómicas de poliuretano flexible con cámaras de evaporación que reducen la transpiración y fatiga.",
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48"],
    colores: [
      { name: "Gris/Negro", code: "#404040" }
    ],
    features: [
      "Confeccionada en Poliuretano inyectado de alta flexibilidad.",
      "Cámaras que disminuyen temperatura y humedad interna."
    ],
    sizeGuide: {
      headers: ["Talle", "Largo del pie", "Talle", "Largo del pie"],
      rows: [
        ["35", "23,1 cm", "42", "28 cm"],
        ["36", "23,8 cm", "43", "28,7 cm"],
        ["37", "24,4 cm", "44", "29,4 cm"],
        ["38", "25,2 cm", "45", "30,1 cm"],
        ["39", "25,9 cm", "46", "30,8 cm"],
        ["40", "26,6 cm", "47", "31,5 cm"],
        ["41", "27,3 cm", "48", "32,2 cm"]
      ]
    }
  },

  // --- CALZADO OMBÚ ---
  {
    id: "58002",
    name: "Botín Ozono Cuero Flúor (Punt. Acero)",
    category: "Calzado Ombú",
    image: "images/pagina (27).jpg", // Página 27 del PDF
    description: "Botín de seguridad Ozono con cuero flor y detalles reflectantes de alta visibilidad. Incorpora puntera de acero reglamentaria y suela dieléctrica.",
    talles: ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Cuero Negro / Flúor", code: "#39ff14" }
    ],
    features: [
      "Puntera de acero resistente al impacto.",
      "Cinta reflectiva gris de alta visibilidad en lateral.",
      "Planta de poliuretano bidensidad dieléctrica e hidrocarburo resistente.",
      "Tratamiento antimicótico Sanitec."
    ],
    sizeGuide: {
      headers: ["Talle", "Largo del pie sugerido"],
      rows: [
        ["38", "25,2 cm"],
        ["39", "25,9 cm"],
        ["40", "26,6 cm"],
        ["41", "27,3 cm"],
        ["42", "28 cm"],
        ["43", "28,7 cm"],
        ["44", "29,4 cm"],
        ["45", "30,1 cm"],
        ["46", "30,8 cm"],
        ["47", "31,5 cm"]
      ]
    }
  },
  {
    id: "58030",
    name: "Botín Ozono Cuero Flor (Punt. Acero)",
    category: "Calzado Ombú",
    image: "images/pagina (28).jpg", // Página 28 del PDF
    description: "Botín clásico de seguridad industrial. Fabricado en cuero flor con refuerzo de cordura y suela autolimpiante.",
    talles: ["38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Cuero Flor Negro", code: "#202020" }
    ],
    features: [
      "Cuero Flor con apliques de CORDURA de máxima durabilidad.",
      "Puntera de acero y suela dieléctrica.",
      "Planta autolimpiante con absorción de impactos (Shock Absorber)."
    ],
    sizeGuide: {
      headers: ["Talle", "Largo del pie sugerido"],
      rows: [
        ["38", "25,2 cm"],
        ["39", "25,9 cm"],
        ["40", "26,6 cm"],
        ["41", "27,3 cm"],
        ["42", "28 cm"],
        ["43", "28,7 cm"],
        ["44", "29,4 cm"],
        ["45", "30,1 cm"],
        ["46", "30,8 cm"],
        ["47", "31,5 cm"]
      ]
    }
  },
  {
    id: "58015",
    name: "Botín CAS Boro Cuero Box (Punt. Acero)",
    category: "Calzado Ombú",
    image: "images/pagina (29).jpg", // Página 29 del PDF
    description: "Botín línea CAS Boro en cuero vacuno box de primera calidad. Durabilidad extrema con suela antideslizante.",
    talles: ["38", "39", "40", "41", "42", "43", "44", "45", "46"],
    colores: [
      { name: "Negro Box", code: "#151515" }
    ],
    features: [
      "Cuero Vacuno Box de alta selección.",
      "Talonera reforzada CAS y ojalillos metálicos de alta calidad.",
      "Puntera de acero homologada y suela antideslizante."
    ],
    sizeGuide: null
  },
  {
    id: "58034",
    name: "Botín Sneaker Composite",
    category: "Calzado Ombú",
    image: "images/pagina (30).jpg", // Página 30 del PDF
    description: "Híbrido entre zapatilla y botín de seguridad. Incorpora puntera de Composite (libre de metal, ultra liviana) y suela tridensidad.",
    talles: ["38", "39", "40", "41", "42", "43", "44", "45", "46"],
    colores: [
      { name: "Gris/Negro", code: "#4f4f4f" }
    ],
    features: [
      "Puntera de Composite (no detectable por metales, no transmite calor).",
      "Suela tridensidad inyectada con plantilla confort.",
      "Tejido altamente transpirable combinado con cuero flor."
    ],
    sizeGuide: null
  },
  {
    id: "58001",
    name: "Botín Cuero Box Pisfer (Punt. Acero)",
    category: "Calzado Ombú",
    image: "images/pagina (31).jpg", // Página 31 del PDF
    description: "Botín económico de alta calidad constructiva. Cuero Box Pisfer con suela de poliuretano inyectado resistente a hidrocarburos.",
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
    colores: [
      { name: "Negro Pisfer", code: "#181818" }
    ],
    features: [
      "Cuero Box Pisfer seleccionado.",
      "Puntera de acero templado.",
      "Pasacordón de ojalillo metálico robusto."
    ],
    sizeGuide: null
  },
  {
    id: "58018",
    name: "Botín Francés con Reflex (Punt. Acero)",
    category: "Calzado Ombú",
    image: "images/pagina (32).jpg", // Página 32 del PDF
    description: "Botín de seguridad francés de cuero flor con reflectivo lateral gris y suela bidensidad.",
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Negro", code: "#1f1f1f" }
    ],
    features: [
      "Cinta reflectiva lateral y refuerzo de talón.",
      "Planta de poliuretano inyectado bidensidad.",
      "Puntera de acero certificada."
    ],
    sizeGuide: null
  },
  {
    id: "58045-13",
    name: "Botas Sneaker Pro Composite (Waterproof)",
    category: "Calzado Ombú",
    image: "images/pagina (33).jpg", // Página 33 del PDF (marcada 35 en el pie)
    description: "Botitas de seguridad premium con tecnología impermeable. Capellada de cuero Nobuk waterproof y puntera Composite.",
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Marrón Nobuk", code: "#5c4033" }
    ],
    features: [
      "Cuero Nobuk de primera calidad con tratamiento impermeable.",
      "Puntera de Composite y plantilla de PU bidensidad inyectada.",
      "Suela exterior compacta para máxima durabilidad y antideslizamiento."
    ],
    sizeGuide: null
  },
  {
    id: "58035",
    name: "Zapato Gema Dama (Punt. Composite)",
    category: "Calzado Ombú",
    image: "images/pagina (34).jpg", // Página 34 del PDF (marcada 36 en el pie)
    description: "Zapato de seguridad diseñado especialmente para horma femenina. Fabricado en cuero Nobuk suave con puntera composite liviana.",
    talles: ["38", "39", "40", "41"],
    colores: [
      { name: "Negro/Gema", code: "#282c34" }
    ],
    features: [
      "Capellada de cuero Nobuk con textil de alta tenacidad.",
      "Suela bidensidad dieléctrica y puntera de Composite.",
      "Absorción de impacto en talón y diseño ergonómico."
    ],
    sizeGuide: null
  },
  {
    id: "58032",
    name: "Zapato Ozono Cuero Flor (Punt. Acero)",
    category: "Calzado Ombú",
    image: "images/pagina (35).jpg", // Página 35 del PDF (marcada 37 en el pie)
    description: "Zapato bajo de seguridad industrial. Cuero flor con apliques de Cordura y cinta reflectiva gris.",
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Negro", code: "#222222" }
    ],
    features: [
      "Pasa cordón plástico de alta resistencia (no conductivo).",
      "Puntera de acero y suela tridensidad.",
      "Plantilla confort incorporada de fábrica."
    ],
    sizeGuide: null
  },
  {
    id: "58011",
    name: "Zapato Prusiano Cuero Flor (Punt. Acero)",
    category: "Calzado Ombú",
    image: "images/pagina (36).jpg", // Página 36 del PDF (marcada 38 en el pie)
    description: "Zapato de seguridad prusiano de cuero flor negro. Suela bidensidad dieléctrica con amortiguador de impacto.",
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Negro Flor", code: "#1a1a1a" }
    ],
    features: [
      "Cuero flor y napa en el cuello para confort.",
      "Cinta reflectiva gris de alta visibilidad en lateral.",
      "Planta bidensidad dieléctrica inyectada."
    ],
    sizeGuide: null
  },
  {
    id: "58040-13",
    name: "Zapatilla Krypton Reflex (Punt. Acero)",
    category: "Calzado Ombú",
    image: "images/pagina (37).jpg", // Página 37 del PDF (marcada 39 en el pie)
    description: "Zapatilla de seguridad con tejido de malla doble densidad transpirable. Look moderno y deportivo sin perder protección.",
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    colores: [
      { name: "Gris/Negro Reflex", code: "#7f8c8d" }
    ],
    features: [
      "Tejido de malla doble densidad con tratamiento antibacteriano.",
      "Puntera de acero y suela dieléctrica bidensidad.",
      "Detalles reflectivos laterales de alta visibilidad."
    ],
    sizeGuide: null
  },
  {
    id: "58040-11",
    name: "Zapatilla Krypton Gris Reflex",
    category: "Calzado Ombú",
    image: "images/pagina (38).jpg", // Página 38 del PDF (marcada 40 en el pie)
    description: "Variante de color de la zapatilla Krypton. Malla doble densidad transpirable gris claro y puntera de acero.",
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    colores: [
      { name: "Gris Claro", code: "#bdc3c7" }
    ],
    features: [
      "Tejido de malla doble densidad gris con tratamiento antibacteriano.",
      "Puntera de acero y suela dieléctrica bidensidad.",
      "Acabados reflectivos de alta visibilidad."
    ],
    sizeGuide: null
  },
  {
    id: "58033",
    name: "Zapatilla Sneaker Composite",
    category: "Calzado Ombú",
    image: "images/pagina (39).jpg", // Página 39 del PDF (marcada 41 en el pie)
    description: "Zapatilla de seguridad Sneaker de cuero flor con apliques en CORDURA y puntera Composite.",
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    colores: [
      { name: "Negro / Azul", code: "#1a2c4e" }
    ],
    features: [
      "Capellada de cuero flor y CORDURA de máxima durabilidad.",
      "Puntera de composite libre de metal.",
      "Pasa cordón con ojalillos metálicos reforzados."
    ],
    sizeGuide: null
  },
  {
    id: "58044-13",
    name: "Zapatillas Sneaker Pro Composite",
    category: "Calzado Ombú",
    image: "images/pagina (40).jpg", // Página 40 del PDF (marcada 42 en el pie)
    description: "Zapatilla de seguridad Sneaker Pro en cuero Nobuk waterproof con plantilla anti-perforación textil integrada.",
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Marrón Oscuro", code: "#3d2314" }
    ],
    features: [
      "Puntera de composite y capellada waterproof.",
      "Plantilla textil anti-perforación que cubre el 100% de la planta.",
      "Pasacordón de alta calidad con ojal metálico."
    ],
    sizeGuide: null
  },
  {
    id: "58044-72",
    name: "Zapatillas Sneaker Pro Azul Composite",
    category: "Calzado Ombú",
    image: "images/pagina (41).jpg", // Página 41 del PDF (marcada 43 en el pie)
    description: "Variante de color de la Sneaker Pro. Nobuk azul marino impermeable y plantilla anti-perforación total.",
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Azul Nobuk", code: "#1d2a44" }
    ],
    features: [
      "Puntera de composite y capellada Nobuk azul waterproof.",
      "Plantilla textil anti-perforación (cubre el 100% del pie).",
      "Ojalillo metálico y pasacordón robusto."
    ],
    sizeGuide: null
  },
  {
    id: "58037",
    name: "Bota Industrial de Goma (Caña Larga)",
    category: "Calzado Ombú",
    image: "images/pagina (42).jpg", // Página 42 del PDF (marcada 44 en el pie)
    description: "Bota de PVC impermeable caña larga con puntera de acero. Diseñada para industrias alimenticias, lavado o tareas rurales.",
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    colores: [
      { name: "Negro Industrial", code: "#111111" }
    ],
    features: [
      "Protección maleolar y refuerzo en empeine.",
      "Suela bicolor de PVC con canales de drenaje autolimpiantes.",
      "Línea de corte superior para regulación de la altura de la caña."
    ],
    sizeGuide: {
      headers: ["Talle", "Largo del pie", "Largo de bota"],
      rows: [
        ["35", "22,4 cm", "33 cm"],
        ["36", "23 cm", "33,3 cm"],
        ["37", "23,5 cm", "33,9 cm"],
        ["38", "24 cm", "34,6 cm"],
        ["39", "24,5 cm", "35,1 cm"],
        ["40", "25 cm", "35,5 cm"],
        ["41", "26 cm", "35,9 cm"],
        ["42", "26,5 cm", "36,4 cm"],
        ["43", "27 cm", "36,8 cm"],
        ["44", "28 cm", "37,1 cm"],
        ["45", "28,5 cm", "37,3 cm"],
        ["46", "29,4 cm", "38 cm"]
      ]
    }
  },
  {
    id: "58037-00",
    name: "Bota Industrial Blanca (Caña Larga)",
    category: "Calzado Ombú",
    image: "images/pagina (43).jpg", // Página 43 del PDF (marcada 45 en el pie)
    description: "Bota industrial caña larga de color blanco. Ideal para frigoríficos, laboratorios o industrias alimenticias. Puntera de acero y planta antideslizante.",
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46"],
    colores: [
      { name: "Blanco Sanitario", code: "#ffffff" }
    ],
    features: [
      "PVC blanco de fácil desinfección y limpieza.",
      "Puntera de acero y suela bicolor autolimpiante.",
      "Protección contra resbalones (Antideslizante)."
    ],
    sizeGuide: {
      headers: ["Talle", "Largo del pie", "Largo de bota"],
      rows: [
        ["35", "22,4 cm", "33 cm"],
        ["36", "23 cm", "33,3 cm"],
        ["37", "23,5 cm", "33,9 cm"],
        ["38", "24 cm", "34,6 cm"],
        ["39", "24,5 cm", "35,1 cm"],
        ["40", "25 cm", "35,5 cm"],
        ["41", "26 cm", "35,9 cm"],
        ["42", "26,5 cm", "36,4 cm"],
        ["43", "27 cm", "36,8 cm"],
        ["44", "28 cm", "37,1 cm"],
        ["45", "28,5 cm", "37,3 cm"],
        ["46", "29,4 cm", "38 cm"]
      ]
    }
  },
  {
    id: "58039",
    name: "Bota Goma Súper Liviana (Sin Puntera)",
    category: "Calzado Ombú",
    image: "images/pagina (45).jpg", // Página 45 del PDF (marcada 47 en el pie)
    description: "Bota caña larga de PVC súper liviana sin puntera metálica. Máxima comodidad para tareas de campo y lluvia general.",
    talles: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47"],
    colores: [
      { name: "Negro", code: "#050505" }
    ],
    features: [
      "Caña flexible de alta elasticidad y bajo peso.",
      "Protección de tobillo (maleolar) y descalce rápido en talón.",
      "Canales de drenaje autolimpiantes en la planta."
    ],
    sizeGuide: {
      headers: ["Talle", "Largo del pie", "Largo de bota"],
      rows: [
        ["38", "24 cm", "37 cm"],
        ["39", "24,5 cm", "37,5 cm"],
        ["40", "25 cm", "38 cm"],
        ["41", "26 cm", "38,5 cm"],
        ["42", "26,5 cm", "39 cm"],
        ["43", "27 cm", "39,5 cm"],
        ["44", "28 cm", "40 cm"],
        ["45", "28,5 cm", "40,5 cm"]
      ]
    }
  },

  // --- INDUMENTARIA SNIPE ---
  {
    id: "25405",
    name: "Buzo Polar Medio Cierre Snipe",
    category: "Indumentaria Snipe",
    image: "images/pagina (48).jpg", // Página 48 (izq) del PDF (marcada 50 en el pie)
    description: "Buzo de abrigo polar con medio cierre. Ligero, térmico y con tratamiento anti-peeling para mayor duración.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" }
    ],
    features: [
      "Cuello alto protector contra el viento.",
      "Cierre de plástico de primera calidad.",
      "Dos bolsillos laterales."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "55 cm", "57 cm", "61 cm", "65 cm", "68 cm", "71 cm", "74 cm"],
        ["Largo (B)", "66 cm", "70 cm", "72 cm", "74 cm", "76 cm", "78 cm", "80 cm"],
        ["Hombros (C)", "46 cm", "48 cm", "50 cm", "52 cm", "54 cm", "56 cm", "58 cm"],
        ["Manga (D)", "65 cm", "65 cm", "66 cm", "66 cm", "67 cm", "67 cm", "68 cm"]
      ]
    }
  },
  {
    id: "25406",
    name: "Chaleco Polar Snipe",
    category: "Indumentaria Snipe",
    image: "images/pagina (48).jpg", // Página 48 (der) del PDF (marcada 50 en el pie)
    description: "Chaleco polar térmico y repelente a la humedad. Tratamiento anti-peeling, ideal para usar sobre camisas.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Gris Topo", code: "#464646" }
    ],
    features: [
      "Material térmico hidrófobo de alta retención de calor.",
      "Cuello alto y cierre plástico frontal completo.",
      "Dos bolsillos laterales cómodos."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "55 cm", "57 cm", "61 cm", "65 cm", "68 cm", "71 cm", "74 cm"],
        ["Largo (B)", "66 cm", "70 cm", "72 cm", "74 cm", "76 cm", "78 cm", "80 cm"],
        ["Hombros (C)", "46 cm", "48 cm", "50 cm", "52 cm", "54 cm", "56 cm", "58 cm"]
      ]
    }
  },
  {
    id: "25407",
    name: "Campera Polar Completa Snipe",
    category: "Indumentaria Snipe",
    image: "images/pagina (50).jpg", // Página 50 (izq) del PDF (marcada 52 en el pie)
    description: "Campera polar completa con cierre completo. Excelente aislamiento térmico e hidrófoba.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Gris Topo", code: "#464646" }
    ],
    features: [
      "Cierre completo central de alta calidad.",
      "Bolsillos laterales con costuras reforzadas.",
      "Tratamiento anti-peeling en ambas caras."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "55 cm", "57 cm", "61 cm", "65 cm", "68 cm", "71 cm", "74 cm"],
        ["Largo (B)", "66 cm", "70 cm", "72 cm", "74 cm", "76 cm", "78 cm", "80 cm"],
        ["Hombros (C)", "46 cm", "48 cm", "50 cm", "52 cm", "54 cm", "56 cm", "58 cm"],
        ["Manga (D)", "65 cm", "65 cm", "66 cm", "66 cm", "67 cm", "67 cm", "68 cm"]
      ]
    }
  },
  {
    id: "26490",
    name: "Chomba Lisa de Piqué Snipe",
    category: "Indumentaria Snipe",
    image: "images/pagina (50).jpg", // Página 50 (der) del PDF (marcada 52 en el pie)
    description: "Chomba polo clásica de piqué de algodón. Transpirable, absorbente y de rápido secado.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Gris Topo", code: "#464646" }
    ],
    features: [
      "Tejido transpirable de alta durabilidad.",
      "Cartera con dos botones al tono.",
      "Excelente estabilidad dimensional tras los lavados."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "52 cm", "56 cm", "59 cm", "61 cm", "64 cm", "67 cm", "70 cm"],
        ["Largo (B)", "72 cm", "74 cm", "76 cm", "77 cm", "79 cm", "81 cm", "83 cm"],
        ["Hombros (C)", "42 cm", "46 cm", "47 cm", "48 cm", "50 cm", "54 cm", "57 cm"],
        ["Manga (D)", "21 cm", "24 cm", "25 cm", "25 cm", "26 cm", "27 cm", "28 cm"]
      ]
    }
  },
  {
    id: "26266",
    name: "Chomba Piqué Mujer Snipe",
    category: "Indumentaria Snipe",
    image: "images/pagina (52).jpg", // Página 52 (izq) del PDF (marcada 54 en el pie)
    description: "Chomba clásica de piqué con moldería entallada para mujer. Tejido transpirable de secado rápido.",
    talles: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Blanco", code: "#ffffff" }
    ],
    features: [
      "Corte entallado femenino.",
      "Tejido piqué transpirable.",
      "Cartera frontal con dos botones."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
      rows: [
        ["Ancho Sisa (A)", "43 cm", "45 cm", "46 cm", "49 cm", "51 cm", "53 cm", "55,5 cm"],
        ["Largo (B)", "61 cm", "63 cm", "66 cm", "67 cm", "68 cm", "72,5 cm", "74 cm"],
        ["Hombros (D)", "34 cm", "36 cm", "38 cm", "40 cm", "41 cm", "44 cm", "48 cm"],
        ["Manga (E)", "22 cm", "23 cm", "23 cm", "24 cm", "24 cm", "26,5 cm", "28,5 cm"]
      ]
    }
  },
  {
    id: "27402",
    name: "Remera Básica de Algodón Snipe",
    category: "Indumentaria Snipe",
    image: "images/pagina (52).jpg", // Página 52 (der) del PDF (marcada 54 en el pie)
    description: "Remera básica de cuello redondo. Tejida con algodón peinado de primera calidad para mayor durabilidad y suavidad.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Blanco", code: "#ffffff" },
      { name: "Gris Topo", code: "#464646" }
    ],
    features: [
      "Algodón peinado con elasticidad natural.",
      "Cuello redondo con ribb de refuerzo.",
      "Ideal para estampados corporativos o bordados."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "50 cm", "53 cm", "56 cm", "59 cm", "62 cm", "66 cm", "69 cm"],
        ["Largo (B)", "69 cm", "71 cm", "73 cm", "75 cm", "79 cm", "82 cm", "85 cm"],
        ["Hombros (D)", "44 cm", "47 cm", "48 cm", "50 cm", "52 cm", "55 cm", "57 cm"],
        ["Manga (E)", "18 cm", "19 cm", "19 cm", "20 cm", "22 cm", "23 cm", "24 cm"]
      ]
    }
  },
  {
    id: "27425",
    name: "Remera Básica Manga Larga",
    category: "Indumentaria Snipe",
    image: "images/pagina (54).jpg", // Página 54 (izq) del PDF (marcada 56 en el pie)
    description: "Remera manga larga de cuello redondo. Confeccionada con algodón peinado premium suave y resistente.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Blanco", code: "#ffffff" }
    ],
    features: [
      "Algodón peinado elástico y suave.",
      "Ideal para usar como primera capa de abrigo.",
      "Mangas con puño clásico para buen ajuste."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "50 cm", "53 cm", "56 cm", "59 cm", "62 cm", "66 cm", "69 cm"],
        ["Largo (B)", "69 cm", "71 cm", "73 cm", "75 cm", "79 cm", "82 cm", "85 cm"],
        ["Hombros (D)", "44 cm", "47 cm", "48 cm", "50 cm", "52 cm", "55 cm", "57 cm"],
        ["Manga (E)", "62 cm", "64 cm", "65 cm", "65 cm", "66 cm", "68 cm", "70 cm"]
      ]
    }
  },
  {
    id: "30602",
    name: "Jean Clásico Rígido Snipe",
    category: "Indumentaria Snipe",
    image: "images/pagina (54).jpg", // Página 54 (der) del PDF (marcada 56 en el pie)
    description: "Pantalón de jean clásico de trabajo de 14.5 oz. 100% Algodón, corte recto y costuras reforzadas.",
    talles: ["40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Super Stone", code: "#4682b4" }
    ],
    features: [
      "Denim extra grueso de 14.5 Oz.",
      "Calce recto clásico de trabajo.",
      "Cinco bolsillos tradicionales con remaches metálicos."
    ],
    sizeGuide: {
      headers: ["Talle", "Cintura (A)", "Largo Total (B)", "Tiro Del. (C)", "Largo Entrep. (F)"],
      rows: [
        ["40", "38 cm", "109 cm", "28 cm", "84 cm"],
        ["42", "40 cm", "109 cm", "28 cm", "84 cm"],
        ["44", "42 cm", "110 cm", "29 cm", "84 cm"],
        ["46", "44 cm", "110 cm", "29 cm", "84 cm"],
        ["48", "46 cm", "111 cm", "30 cm", "84 cm"],
        ["50", "48 cm", "111 cm", "30 cm", "84,5 cm"],
        ["52", "50 cm", "112 cm", "31 cm", "84,5 cm"],
        ["54", "52 cm", "112 cm", "31 cm", "84,5 cm"]
      ]
    }
  },
  {
    id: "30605",
    name: "Pantalón Cargo Snipe (Hombre)",
    category: "Indumentaria Snipe",
    image: "images/pagina (56).jpg", // Página 56 (izq) del PDF (marcada 58 en el pie)
    description: "Pantalón cargo de gabardina 100% algodón. Cuenta con bolsillos de gran capacidad en los laterales.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Beige", code: "#d2b48c" }
    ],
    features: [
      "100% Algodón ultra resistente.",
      "Bolsillos cargo laterales con solapa.",
      "Botón metálico y cremallera de alta resistencia."
    ],
    sizeGuide: {
      headers: ["Medida", "38", "40", "42", "44", "46", "48", "50", "52"],
      rows: [
        ["Cintura (A)", "40", "41", "42", "43", "45,5", "48", "49", "52,5"],
        ["Largo (B)", "108", "108", "109", "110", "110", "110", "111", "111"],
        ["Botamanga (E)", "20", "20", "20", "21", "21,5", "22,5", "22,5", "23"]
      ]
    }
  },
  {
    id: "30606",
    name: "Pantalón Cargo Snipe (Mujer)",
    category: "Indumentaria Snipe",
    image: "images/pagina (56).jpg", // Página 56 (der) del PDF (marcada 58 en el pie)
    description: "Pantalón cargo de gabardina 100% algodón con diseño y entalle para mujer.",
    talles: ["36", "38", "40", "42", "44", "46", "48", "50", "52"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Beige", code: "#d2b48c" }
    ],
    features: [
      "Moldería femenina entallada.",
      "Bolsillos cargo laterales estéticos.",
      "Botón metálico de alta resistencia."
    ],
    sizeGuide: {
      headers: ["Medida", "36", "38", "40", "42", "44", "46", "48", "50"],
      rows: [
        ["Cintura (A)", "37", "39", "41", "43", "45", "47", "49", "51"],
        ["Largo (B)", "105", "106", "107", "108", "109", "110", "111", "112"],
        ["Botamanga (E)", "20", "21", "22", "22", "23", "23", "24", "24,5"]
      ]
    }
  },
  {
    id: "30611",
    name: "Pantalón Cargo Elastizado 9oz",
    category: "Indumentaria Snipe",
    image: "images/pagina (57).jpg", // Página 57 del PDF (marcada 59 en el pie)
    description: "Pantalón cargo con un plus de confort. Tela elastizada de 9 Oz con refuerzo en la entrepierna para trabajos exigentes.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Beige", code: "#d2b48c" },
      { name: "Gris Topo", code: "#464646" }
    ],
    features: [
      "Tejido elastizado súper confortable.",
      "Refuerzo doble en la costura de la entrepierna.",
      "Bolsillos cargo y traseros reforzados."
    ],
    sizeGuide: null
  },
  {
    id: "30612",
    name: "Pantalón Cargo Elastizado (Mujer)",
    category: "Indumentaria Snipe",
    image: "images/pagina (58).jpg", // Página 58 del PDF (marcada 60 en el pie)
    description: "Pantalón de trabajo cargo elastizado de 9oz con moldería entallada de mujer y costuras reforzadas en la entrepierna.",
    talles: ["36", "38", "40", "42", "44", "46", "48"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Beige", code: "#d2b48c" }
    ],
    features: [
      "Corte cargo femenino con tiro medio.",
      "Doble costura y refuerzo de entrepierna.",
      "Botón metálico y pasacintos reforzados."
    ],
    sizeGuide: null
  },
  {
    id: "30610",
    name: "Bermuda Cargo Elastizada 9oz",
    category: "Indumentaria Snipe",
    image: "images/pagina (60).jpg", // Página 60 del PDF (marcada 62 en el pie)
    description: "Bermuda cargo de gabardina elastizada de 9 Oz. Frescura, resistencia y comodidad para climas cálidos.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Beige", code: "#d2b48c" },
      { name: "Gris Topo", code: "#464646" }
    ],
    features: [
      "Bolsillos cargo con cierre velcro.",
      "Refuerzo doble en la entrepierna.",
      "Bragueta con cremallera y pasacintos reforzados."
    ],
    sizeGuide: null
  },
  {
    id: "51033",
    name: "Campera Trucker Snipe (Térmica/Impermeable)",
    category: "Indumentaria Snipe",
    image: "images/pagina (61).jpg", // Página 61 (izq) del PDF (marcada 63 en el pie)
    description: "Campera de trabajo de alta gama para climas muy fríos o lluviosos. Tejido exterior impermeable y forrería de matelassé térmico.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" }
    ],
    features: [
      "Tejido Trucker altamente impermeable y resistente a la abrasión.",
      "Capucha desmontable con cierre.",
      "Bolsillos internos porta-documentos.",
      "Puños elastizados anti-viento."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "63 cm", "65 cm", "67 cm", "69 cm", "71 cm", "72 cm", "74 cm"],
        ["Largo (B)", "69 cm", "70 cm", "73 cm", "75 cm", "76 cm", "77 cm", "78 cm"],
        ["Hombros (D)", "54 cm", "55 cm", "59 cm", "61 cm", "61 cm", "63 cm", "65 cm"],
        ["Manga (E)", "62 cm", "63 cm", "65 cm", "67 cm", "68 cm", "70 cm", "71 cm"]
      ]
    }
  },
  {
    id: "30731",
    name: "Camisa de Jean Snipe",
    category: "Indumentaria Snipe",
    image: "images/pagina (61).jpg", // Página 61 (der) del PDF (marcada 63 en el pie)
    description: "Camisa clásica de jean de trabajo confeccionada en denim 100% algodón. Resistente al desgaste con doble bolsillo en el pecho.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54"],
    colores: [
      { name: "Jean Stone", code: "#3a5b82" }
    ],
    features: [
      "Tejido 100% algodón denim duradero.",
      "Bolsillos con tapa y botón de seguridad en el pecho.",
      "Puño ajustable con botón y ojal."
    ],
    sizeGuide: null
  },
  {
    id: "51030-10",
    name: "Campera Trucker Liviana",
    category: "Indumentaria Snipe",
    image: "images/pagina (63).jpg", // Página 63 del PDF (marcada 65 en el pie)
    description: "Campera de abrigo liviana pero resistente al agua y frío moderado. Composición 100% poliéster.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" }
    ],
    features: [
      "Diseño combinado Trucker y Matelassé.",
      "Ruedo ajustable y puño elastizado en mangas.",
      "Capucha desmontable muy cómoda."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "60 cm", "63 cm", "67 cm", "70 cm", "73 cm", "75 cm", "78 cm"],
        ["Largo (B)", "71 cm", "72 cm", "73 cm", "75 cm", "77 cm", "79 cm", "80 cm"],
        ["Hombros (D)", "51 cm", "54 cm", "56 cm", "59 cm", "61 cm", "63 cm", "65 cm"],
        ["Manga (E)", "63 cm", "66 cm", "67 cm", "68 cm", "68 cm", "70 cm", "70 cm"]
      ]
    }
  },
  {
    id: "63002-10",
    name: "Guardapolvo Clásico",
    category: "Indumentaria Snipe",
    image: "images/pagina (65).jpg", // Página 65 del PDF (marcada 67 en el pie)
    description: "Guardapolvo clásico unisex. Cuello con solapa, mangas largas y snaps metálicos inoxidables.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Blanco", code: "#ffffff" }
    ],
    features: [
      "Acceso frontal rápido con snaps metálicos.",
      "Tres bolsillos plaque externos (uno en el pecho).",
      "Martingala fija en la espalda."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL"],
      rows: [
        ["Ancho Sisa (A)", "58 cm", "59 cm", "62 cm", "63 cm", "64 cm", "68 cm"],
        ["Largo (B)", "99 cm", "100 cm", "104 cm", "105 cm", "109 cm", "110 cm"],
        ["Hombros (C)", "45 cm", "46 cm", "48 cm", "50 cm", "51 cm", "55 cm"],
        ["Manga (D)", "64,5 cm", "65 cm", "66 cm", "67 cm", "68 cm", "69 cm"]
      ]
    }
  },
  {
    id: "30800-10",
    name: "Sweater Escote V Jersey",
    category: "Indumentaria Snipe",
    image: "images/pagina (67).jpg", // Página 67 (izq) del PDF (marcada 69 en el pie)
    description: "Sweater corporativo con escote en V tejido en punto Jersey. Mezcla de algodón y acrílico para suavidad y durabilidad.",
    talles: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" }
    ],
    features: [
      "Composición equilibrada: 50% Algodón, 50% Acrílico.",
      "Cuello, puños y cintura elastizados.",
      "Tejido en Jersey fino de aspecto refinado."
    ],
    sizeGuide: {
      headers: ["Medida", "XS", "S", "M", "L", "XL", "2XL", "3XL"],
      rows: [
        ["Pecho (1/2)", "54 cm", "56 cm", "58 cm", "60 cm", "62 cm", "64 cm", "66 cm"],
        ["Largo frente", "70 cm", "70 cm", "71 cm", "72 cm", "72 cm", "73 cm", "73 cm"],
        ["Manga", "66 cm", "66 cm", "66 cm", "67 cm", "67 cm", "67 cm", "68 cm"]
      ]
    }
  },
  {
    id: "55001-10",
    name: "Pantalón Náutico Clásico",
    category: "Indumentaria Snipe",
    image: "images/pagina (67).jpg", // Página 67 (der) del PDF (marcada 69 en el pie)
    description: "Pantalón náutico súper liviano y cómodo con cintura elastizada. Ideal para actividades de baja fricción y confort.",
    talles: ["38", "40", "42", "44", "46", "48", "50"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" }
    ],
    features: [
      "Cintura completamente elastizada con cordón de ajuste.",
      "Dos bolsillos delanteros y uno trasero tipo plaque.",
      "Tela ligera, fresca y de secado rápido."
    ],
    sizeGuide: {
      headers: ["MEDIDAS", "38", "40", "42", "44", "46", "48", "50"],
      rows: [
        ["Cintura (A)", "30", "32", "33", "34", "35", "36", "36,5"],
        ["Largo Total (B)", "101", "104", "105", "107", "108,5", "112", "113"],
        ["Largo Entrepierna", "78.5", "80", "81", "81", "81", "82.5", "82.5"]
      ]
    }
  },
  {
    id: "15420-76",
    name: "Pantalón Slim Dama (Denim)",
    category: "Indumentaria Snipe",
    image: "images/pagina (69).jpg", // Página 69 del PDF (marcada 71 en el pie)
    description: "Jeans clásicos de denim elástico con corte ajustado slim fit y tiro alto. Ideal para personal de oficina o ventas.",
    talles: ["36", "38", "40", "42", "44", "46", "48", "50"],
    colores: [
      { name: "Azul Denim", code: "#1b2c4e" }
    ],
    features: [
      "Modelo slim fit de tiro alto.",
      "Confeccionado en denim con elastano (98% algodón, 2% elastano).",
      "5 bolsillos tradicionales."
    ],
    sizeGuide: {
      headers: ["TALLES", "36", "38", "40", "42", "44", "46", "48", "50"],
      rows: [
        ["Cintura (A)", "31 cm", "32 cm", "34 cm", "35 cm", "36 cm", "40 cm", "41 cm", "42 cm"],
        ["Largo Total (B)", "99 cm", "99 cm", "99 cm", "100 cm", "101 cm", "101 cm", "101 cm", "101 cm"],
        ["Ancho Botamanga (E)", "11 cm", "12,5 cm", "13 cm", "13,5 cm", "14 cm", "14 cm", "14,5 cm", "15 cm"]
      ]
    }
  },
  {
    id: "25321",
    name: "Buzo Básico de Frisa",
    category: "Indumentaria Snipe",
    image: "images/pagina (71).jpg", // Página 71 (izq) del PDF (marcada 73 en el pie)
    description: "Buzo de frisa de algodón con cuello redondo clásico. Cómodo y abrigado con acabados de ribb de punto.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Blanco", code: "#ffffff" },
      { name: "Negro", code: "#101010" },
      { name: "Gris Melange", code: "#b5b8b9" }
    ],
    features: [
      "Cuello, cintura y puños en ribb elastizado.",
      "Tejido interior frisado muy suave y abrigado.",
      "Corte clásico cómodo de trabajo."
    ],
    sizeGuide: {
      headers: ["Medidas de Prenda", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
      rows: [
        ["Ancho Sisa (A)", "55 cm", "57 cm", "60 cm", "62 cm", "65 cm", "67 cm", "69 cm"],
        ["Largo (B)", "69 cm", "69 cm", "73 cm", "73 cm", "74 cm", "74 cm", "75 cm"],
        ["Hombros (D)", "46 cm", "48 cm", "50 cm", "52 cm", "54 cm", "56 cm", "58 cm"],
        ["Manga (E)", "60 cm", "62 cm", "63 cm", "65 cm", "67 cm", "68 cm", "69 cm"]
      ]
    }
  },
  {
    id: "30607",
    name: "Bermuda Cargo Clásica",
    category: "Indumentaria Snipe",
    image: "images/pagina (71).jpg", // Página 71 (der) del PDF (marcada 73 en el pie)
    description: "Bermuda cargo de gabardina de algodón. Muy práctica para el verano, con amplios bolsillos laterales de fuelle.",
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" },
      { name: "Negro", code: "#101010" },
      { name: "Gris Topo", code: "#464646" }
    ],
    features: [
      "Bolsillos laterales cargo con fuelle y abrojo.",
      "Bragueta con cremallera y botón de alta calidad.",
      "Dos bolsillos traseros plaque con tapa."
    ],
    sizeGuide: {
      headers: ["Talles", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
      rows: [
        ["Cintura (A)", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
        ["Largo Total (D)", "53", "54", "54", "54.5", "54.5", "55", "56.5", "57", "58", "58", "59"],
        ["Cadera (H)", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64"]
      ]
    }
  },
  {
    id: "55031",
    name: "Mameluco Reflectivo de Trabajo",
    category: "Indumentaria Snipe",
    image: "images/pagina (73).jpg", // Página 73 del PDF (marcada 75 en el pie)
    description: "Mameluco enterizo de seguridad. Cuenta con cintas reflectivas gris plata en mangas y piernas, ideal para mecánicos y talleres.",
    talles: ["S", "M", "L", "XL", "2XL", "3XL"],
    colores: [
      { name: "Azul Marino", code: "#1a2c4e" }
    ],
    features: [
      "Cuello volcado tipo camisa y puños elastizados.",
      "Cremallera frontal completa con solapa protectora.",
      "Múltiples bolsillos (pecho, costados y traseros) con tapa."
    ],
    sizeGuide: {
      headers: ["Medida de Prenda", "S", "M", "L", "XL", "2XL", "3XL"],
      rows: [
        ["Hombros (A)", "39 cm", "41 cm", "43 cm", "45 cm", "47 cm", "49 cm"],
        ["Sisas (B)", "60 cm", "62 cm", "64 cm", "66 cm", "68 cm", "70 cm"],
        ["Manga (C)", "58 cm", "60 cm", "62 cm", "64 cm", "66 cm", "68 cm"],
        ["Largo Total (D)", "158 cm", "161 cm", "164 cm", "167 cm", "171 cm", "174 cm"],
        ["Entrepierna (G)", "79 cm", "80 cm", "81 cm", "82 cm", "83 cm", "84 cm"]
      ]
    }
  },
  {
    id: "88105",
    name: "Guante Moteado Antideslizante",
    category: "Indumentaria Snipe",
    image: "images/pagina (75).jpg", // Página 75 del PDF (marcada 77 en el pie)
    description: "Guante moteado tejido sin costuras con hilado de algodón y poliéster. Palma con puntos de PVC antideslizantes.",
    talles: ["Talle Único"],
    colores: [
      { name: "Crudo", code: "#f5f5dc" }
    ],
    features: [
      "Puntos de PVC de alta adherencia en palma.",
      "Tejido sin costuras internas para evitar roces y ampollas.",
      "Excelente ventilación que previene la transpiración."
    ],
    sizeGuide: null
  },
  {
    id: "88106",
    name: "Guante Vaqueta de Cuero",
    category: "Indumentaria Snipe",
    image: "images/pagina (76).jpg", // Página 76 del PDF (marcada 78 en el pie)
    description: "Guante de cuero vaqueta amarilla de alta flexibilidad. Excelente nivel de desteridad para manipulación de piezas y herramientas.",
    talles: ["Talle Único"],
    colores: [
      { name: "Amarillo", code: "#ffd700" }
    ],
    features: [
      "Cuero vaqueta seleccionado altamente suave y resistente.",
      "Puño elástico amplio para fácil postura y ventilación.",
      "Resistencia moderada a aceites y grasas."
    ],
    sizeGuide: null
  }
];

// Exportación para navegadores
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STORE_CONFIG, PRODUCT_CATALOG };
} else {
  window.STORE_CONFIG = STORE_CONFIG;
  window.PRODUCT_CATALOG = PRODUCT_CATALOG;
}
