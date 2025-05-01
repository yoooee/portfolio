  export type Tag = 'css' | 'html' | 'blah';

  export interface portfolioItem {
    title?: string;
    subtitle?: string;
    image: string;
    tags?: Tag [];
  }
