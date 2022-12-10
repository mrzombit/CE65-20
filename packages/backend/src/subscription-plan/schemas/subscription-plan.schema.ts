import * as mongoose from 'mongoose'

export const SubscriptionPlanSchema = new mongoose.Schema({
    name: {
            th: String,
            en: String,
        },
    price: Boolean,
    properties: Object,
    created_date: Date,
    is_actived: Boolean,
})