export class CreateCurrencyDTO {
    readonly name: {
      th: string,
      en: string,
    };
    readonly abbreviation: string;
    readonly full_name: string;
    readonly created_date: Date;
  }