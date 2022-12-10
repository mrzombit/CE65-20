import * as mongoose from 'mongoose';
    
export const ProjectSchema = new mongoose.Schema({
    name: String,
    industry_id: String,
    description: String,
    logo_url: String,
    created_date: Date,
    modified_date: Date,
    sale_trends: [
            {
                year: String,
                trend: String,
                description: String,
            }
        ],
    model_config: {
        projection_period: String,
        start_date: String,
        currrency_id: String,
        working_hours: String,
        income_tax_rate: String,
        discounting_rate: String,
    },
    revenue: {
        service_table_ids: [String],
        product_table_ids: [String],
    },
    expense: {
        investment_table_ids: [String],
        fixed_cost_table_ids: [String],
    },
    miscellaneous: {
        equity_contribution: [{

        }],
        equity_repayment: [{

        }],
        debt_issuance: [{

        }],
        debt_rapayment: [{

        }],
        interest_rate: String,
    },
});