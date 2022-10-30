export interface Category {
  id: string;
  stat: string;
  total: number;
}

export interface CategoryLeaderListProps {
  categoryLeaders: Category[];
}
