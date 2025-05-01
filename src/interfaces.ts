  export type Tag = 'css' | 'html' | 'javascript';

  export interface portfolioItem {
    title?: string;
    subtitle?: string;
    image: string;
    tags?: Tag [];
  }
