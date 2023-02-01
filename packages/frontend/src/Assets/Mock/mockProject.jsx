export default Project = {
    id: 1,
    name: "KoonK DreamHair",
    industryIds: [
        1,
        2,
        4,
    ],
    description: "This business is about ABC. We aim to raise up Thailand GDP 1%",
    icon: "https://img.freepik.com/premium-vector/barber-shop-icon-logo-vector-icon-template_598213-1562.jpg?w=2000",
    createdDate: "12-11-2022",
    modifiedDate: "13-11-2022",
    salesTrends: [
        {
            year: 1,
            trend: 0.4,
        },
        {
            year: 2,
            trend: 0.5,
        },
        {
            year: 3,
            trend: 0.6,
        },
        {
            year: 4,
            trend: 0.7,
        },
    ],
    businessGoals: [
        {
            businessGoalId: 1,
            goal: {
                val: 0.5,
            }
        },
        {
            businessGoalId: 2,
            goal: {
                val: 2.6,
            }
        },
    ],
    modelConfig: {
        projectionPeriod: 4,
        startDate: "12-11-2022",
        currencyId: 1,
        workingHours: 9,
        incomeTaxRate: 0.15,
        discountingRate: 0.08,
    },
    revenue: {
        serviceTableIds: [
            1,
            2,
        ],
        productTableIds: [
            1,
            2,
        ],
    },
    expense: {
        investmentTableIds: [
            1,
            2,
        ],
        fixedCostTableIds: [
            1,
            2,
        ],
    },
    miscellaneous: {
        equityContribution: [
            {
                name: "Me",
                amount: 500000,
                date: "11-12-2022",
            },
            {
                name: "My Wife",
                amount: 200000,
                date: "11-12-2022",
            },
        ],
        equityRepayment: [
            {
                name: "My Wife",
                share: 0.2,
                repayments: [
                    {
                        date: "12-11-2023",
                        amount: 200,
                    }
                ]
            },
        ],
        debtIssuance: [
            {
                name: "เงินกู้ธนาคาร",
                amount: 1000000,
                apr: 5,
                periodId: 1,
                payments: [
                    {
                        name: "Rainbow QuickCash",
                        date: "12-11-2023",
                        amount: 500000,
                    },
                    {
                        name: "Rainbow QuickCash",
                        date: "12-11-2024",
                        amount: 500000,
                    },
                ]
            }
        ]
    },
    ffc: {

    },
}