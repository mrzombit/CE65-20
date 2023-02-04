import { Document } from 'mongoose';
    
export interface BusinessGoal extends Document {
    readonly name: {
        th: string,
        en: string,
      };
      readonly full_name: string;
      readonly detail: {
        bad_range: [Number,Number],
        good_range: [Number,Number],
        great_range: [Number,Number],
      };
      readonly created_date: Date;
}