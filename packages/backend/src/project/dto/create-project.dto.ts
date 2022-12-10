export class CreateProjectDTO {
    readonly name: string;
    readonly industry_id: string;
    readonly description: string;
    readonly logo_url: string;
    readonly created_date: Date;
    readonly modified_date: Date;
    readonly sale_trends: [
            {
                year: string,
                trend: string,
                description: string,
            }
        ];
    readonly model_config: {
        projection_period: string,
        start_date: string,
        currrency_id: string,
        working_hours: string,
        income_tax_rate: string,
        discounting_rate: string,
    };
    readonly revenue: {
        service_table_ids: [string],
        product_table_ids: [string],
    };
    readonly expense: {
        investment_table_ids: [string],
        fixed_cost_table_ids: [string],
    };
    readonly miscellaneous: {
        equity_contribution: [{

        }],
        equity_repayment: [{

        }],
        debt_issuance: [{

        }],
        debt_rapayment: [{

        }],
        interest_rate: string,
    };
  }