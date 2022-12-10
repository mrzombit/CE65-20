export class CreateSubscriptionPlanDTO {
    readonly name: {
        th: string,
        en: string,
      };
      readonly price: boolean;
      readonly properties: JSON;
      readonly created_date: Date;
      readonly is_actived: boolean;
  }