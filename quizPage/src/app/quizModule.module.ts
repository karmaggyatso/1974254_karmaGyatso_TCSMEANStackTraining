export class QuizModule {
  constructor(
    public question: string,
    public answers: Array<string>,
    public correctAnswer: number
  ) {}
}
