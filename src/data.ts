export interface Category {
  title: string;
  description: string;
  iconName: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface Bonus {
  id: number;
  tag: string;
  title: string;
  description: string;
  originalPrice: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
  isElite?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PreviewItem {
  title: string;
  category: string;
  description: string;
  image: string;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
}

export const DRILL_CATEGORIES: Category[] = [
  {
    title: "Reflexo e Reação",
    description: "",
    iconName: "Zap"
  },
  {
    title: "Saídas do Gol",
    description: "",
    iconName: "PlaneTakeoff"
  },
  {
    title: "Queda e Defesa",
    description: "",
    iconName: "TrendingDown"
  },
  {
    title: "Posicionamento",
    description: "",
    iconName: "Compass"
  },
  {
    title: "Mano a Mano (1x1)",
    description: "",
    iconName: "ShieldAlert"
  },
  {
    title: "Coordenação Motora",
    description: "",
    iconName: "Activity"
  },
  {
    title: "Agilidade e Explosão",
    description: "",
    iconName: "Flame"
  },
  {
    title: "Trabalho com os Pés",
    description: "",
    iconName: "Footprints"
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: "Dinâmicas Objetivas",
    description: "Atividades práticas para aplicar imediatamente nos treinos.",
    iconName: "Target"
  },
  {
    title: "Metodologia Moderna",
    description: "Dinâmicas inspiradas em treinamentos profissionais.",
    iconName: "Award"
  },
  {
    title: "Conteúdo Organizado",
    description: "Tudo separado por categorias para facilitar a aplicação.",
    iconName: "LayoutGrid"
  },
  {
    title: "Evolução Constante",
    description: "Melhore reflexo, tomada de decisão e segurança no gol.",
    iconName: "TrendingUp"
  }
];

export const BONUSES: Bonus[] = [
  {
    id: 1,
    tag: "BÔNUS 1",
    title: "Ficha de Presença dos Atletas",
    description: "Modelo pronto e organizado para registrar, controlar e acompanhar a frequência dos seus atletas nos treinos.",
    originalPrice: "R$ 47,00",
    iconName: "ClipboardCheck"
  },
  {
    id: 2,
    tag: "BÔNUS 2",
    title: "Guia de Preparação Mental e Foco para Goleiros",
    description: "Estratégias avançadas para manter a calma sob pressão e ter uma mente blindada.",
    originalPrice: "R$ 67,00",
    iconName: "Brain"
  },
  {
    id: 3,
    tag: "BÔNUS 3",
    title: "Circuitos de Agilidade e Explosão",
    description: "Circuitos prontos para potencializar reação e impulsão.",
    originalPrice: "R$ 49,00",
    iconName: "Flame"
  }
];

export const PREVIEW_DRILLS: PreviewItem[] = [
  {
    title: "Reflexo curto",
    category: "Reflexo e Reação",
    description: "Uso de mini-bolas e obstáculos rebatedores frontais para ativar o tempo de resposta ocular e manual.",
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=600&auto=format&fit=crop&q=80",
    difficulty: "Intermediário"
  },
  {
    title: "Defesa cara a cara",
    category: "Mano a Mano",
    description: "Abafamento agressivo utilizando posicionamento corporal em 'Cruz de Goleiro' para obstruir o gol.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&auto=format&fit=crop&q=80",
    difficulty: "Avançado"
  },
  {
    title: "Trabalho de pés",
    category: "Trabalho de Pés",
    description: "Deslocamentos em zigue-zague rápido contornando cones coloridos seguidos de recepção de bola em velocidade.",
    image: "https://images.unsplash.com/photo-1431324155629-1a6edd1def8d?w=600&auto=format&fit=crop&q=80",
    difficulty: "Iniciante"
  },
  {
    title: "Queda lateral",
    category: "Queda e Defesa",
    description: "Treinamentos em solo com ênfase na biomecânica de queda lateral para economizar energia e reter a bola de forma segura.",
    image: "https://images.unsplash.com/photo-1606925797300-0b35e9d17d0e?w=600&auto=format&fit=crop&q=80",
    difficulty: "Intermediário"
  },
  {
    title: "Reação com obstáculos",
    category: "Reflexo e Reação",
    description: "Treino de defesas com bolas desviadas intencionalmente por barreiras ou cones, desafiando a leitura instantânea da bola.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=600&auto=format&fit=crop&q=80",
    difficulty: "Avançado"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Carlos Henrique",
    role: "Técnico de Futebol Base",
    comment: "As dinâmicas fizeram os goleiros participarem muito mais dos treinos.",
    rating: 5,
    image: "https://i.ibb.co/k6QZTqPM/Captura-de-tela-2026-05-23-100325.png"
  },
  {
    name: "Fernando Souza",
    role: "Preparador Físico",
    comment: "Material muito fácil de aplicar. Economiza muito tempo no dia a dia.",
    rating: 5,
    image: "https://i.ibb.co/1t7q4xhh/Captura-de-tela-2026-05-28-220937.png"
  },
  {
    name: "Matheus Oliveira",
    role: "Professor de Escolinha de Futebol",
    comment: "Os treinos ficaram mais intensos e organizados depois que comecei a usar.",
    rating: 5,
    image: "https://i.ibb.co/kVXy6Pmj/Captura-de-tela-2026-05-28-221449.png"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Como recebo o material?",
    answer: "O acesso é enviado imediatamente após a confirmação do pagamento."
  },
  {
    question: "Funciona para qualquer idade?",
    answer: "Sim, as dinâmicas podem ser adaptadas para diferentes níveis e idades."
  },
  {
    question: "Preciso de muitos materiais?",
    answer: "Não. A maioria das dinâmicas utiliza cones, bolas e materiais simples."
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim, você poderá acessar quando quiser."
  },
  {
    question: "Posso aplicar em sessões coletivas?",
    answer: "Sim, várias dinâmicas funcionam tanto individualmente quanto em grupo."
  },
  {
    question: "Qual a garantia do produto?",
    answer: "Nós oferecemos uma garantia incondicional de 14 dias. Se você não gostar, devolvemos 100% do seu dinheiro."
  }
];
