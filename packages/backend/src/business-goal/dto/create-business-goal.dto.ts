export class CreateBusinessGoalDTO {
    readonly name: {
      th: string,
      en: string,
    };
    readonly full_name: string;
  readonly detail: JSON;
    readonly created_date: Date;
  }