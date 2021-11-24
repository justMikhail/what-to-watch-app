export type CommentType = {
  id: number;
  user: {
    id: number;
    name: string;
  },
  rating: number;
  comment: string;
  date: string;
}

export type CommentPostType = {
  rating: number,
  comment: string,
}
