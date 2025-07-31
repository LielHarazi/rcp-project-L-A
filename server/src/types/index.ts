export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
}
export interface review {
  id: string;
  title: string;
  content: string;
  rating: number;
  authorId: string;
  authorName: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  authorId: string;
  authorName: string;
  createdAt: Date;
  updatedAt: Date;
}
