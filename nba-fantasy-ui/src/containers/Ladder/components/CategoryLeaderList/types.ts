export interface Category {
  id: number;
  stat: string;
  total: number;
}

export interface CategoryLeaderListProps {
  categoryLeaders: Category[];
}
