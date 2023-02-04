import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
    name: String,
    industry_ids: [String],
    description: String,
    logo_url: String,
    created_date: Date,
    modified_date: Date,
    sale_trends: [
        {
            year: Number,
            trend: Number,
            description: String,
        },
    ],
    business_goals: [
        {
            business_goal_id: String,
            goal: {
            },
        }
    ],
    model_config: {
        projection_period: Number,
        start_date: Date,
        currency_id: String,
        working_hours: Number,
        income_tax_rate: Number,
        discounting_rate: Number,
    },
    revenue: {
        service_table_ids: [{
            name: String,
            description: String,
            color: String,
            text_color: String,
            services: [{
                name: String,
                unit: Number,
                unit_name: String,
                serve_per_unit: Number,
                revenue_per_service: Number,
                cost_per_service: Number,
                price_increase: Number,
                price_increase_period_id: String,
                cost_increase: Number,
                cost_increase_period_id: String,
                start_date: Date,
                seasonal_trends: [Number],
            }]
        }],
        product_table_ids: [{
            name: String,
            description: String,
            color: String,
            text_color: String,
            products: [{
                name: String,
                days_of_inventory: {
                    days: Number,
                    months: Number,
                },
                revenue_per_unit: Number,
                cost_per_service: Number,
                price_increase: Number,
                price_increase_period_id: String,
                cost_increase: Number,
                cost_increase_period_id: String,
                start_date: Date,
                seasonal_trends: [Number],
            }]
        }],
    },
    expense: {
        investment_table_ids: [{
            name: String,
            description: String,
            color: String,
            text_color: String,
            investments: [{
                name: String,
                amount: Number,
                account_id: String,
                is_initial: Boolean,
                start_date: Date,
            }]
        }],
        fixed_cost_table_ids: [{
            name: String,
            description: String,
            color: String,
            text_color: String,
            fixed_costs: [{
                name: String,
                amount: Number,
                period_id: String,
                number: [{
                    one: Number,
                    two: Number,
                    three: Number,
                    four: Number,
                    five: Number,
                    six: Number,
                    seven: Number,
                    eight: Number,
                    nine: Number,
                    ten: Number,
                    eleven: Number,
                    twelve: Number,
                }],
                start_date: Date,
                cost_increase: Number,
                cost_increase_period_id: String,
            }]
        }],
    },
    miscellaneous: {
        equity_contribution: [{
            name: String,
            amount: Number,
            date: Date,
        }],
        equity_repayment: [{
            name: String,
            share: Number,
            repayment:
            {
                period_id: String,
                start_date: Date,
            }
            ,
        }],
        debt_issuance: [{
            name: String,
            amount: Number,
            apr: Number,
            period_id: String,
            payments: [
                {
                    name: String,
                    date: Date,
                    amount: Number,
                }
            ]
        }],
        ffcReason: String,
    },
});