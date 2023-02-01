export class CreateProjectDTO {
    readonly name: string;
    readonly industry_ids: [string];
    readonly description: string;
    readonly logo_url: string;
    readonly created_date: Date;
    readonly modified_date: Date;
    readonly sale_trends: [
            {
                year: string,
                trend: string,
                description: string,
            },
        ];
    readonly business_goals: [
        {
            business_goal_id: string,
            goal: {
            },
        }
    ];
    readonly model_config: {
        projection_period: string,
        start_date: Date,
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
            name: string,
            amount: string,
            date: Date,
        }],
        equity_repayment: [{
            name: string,
            share: string,
            repayment: [
                {
                    date: Date,
                    amount: string,
                }
            ],
        }],
        debt_issuance: [{
            name: string,
            amount: string,
            apr: string,
            period_id: string,
            payments: [
                {
                    name: string,
                    date: Date,
                    amount: string,
                }
            ]
        }],
        ffcReason: string,
    };
  }