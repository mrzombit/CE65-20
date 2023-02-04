import * as mongoose from 'mongoose';
    
export const BusinessGoalSchema = new mongoose.Schema({
    name: {
        th: String,
        en: String,
      },
      full_name: String,
      detail: {
        bad_range: [Number,Number],
        good_range: [Number,Number],
        great_range: [Number,Number],
      },
      created_date: Date,
});