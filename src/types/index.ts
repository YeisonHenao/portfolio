export interface Skill {
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  period: string;
  description: string;
}

export interface Technology {
  name: string;
  color: string;
  category: 'Frontend' | 'Backend' | 'Móvil' | 'IA';
}