export class QuizModule {
  constructor(
    public question: string,
    public answers: Array<string>,
    public correctIndex: number
  ) {}
}
