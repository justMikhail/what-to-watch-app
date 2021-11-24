export type ReviewFormType = {
  rating: number,
  comment: string,
}

export type ReviewType = ReviewFormType & {
  id: string,
  user: ReviewUser,
  date: Date,
}

export type ReviewUser = {
  id: string,
  name: string,
};

