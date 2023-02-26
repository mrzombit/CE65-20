const BIZTOOL_PAGE_MOCKDATA = {
    pageConfig: {
        data: {

        },
    },
    totalInvestment: {
        data: [
            {
                tableId: 1,
                title: "รายการสินค้า",
                rowData: [
                    {
                        rowId: 1,
                        data:
                            [
                                { colId: 1, val: "สินค้า A" },
                                { colId: 2, val: "2 ปี" },
                                { colId: 3, val: [60, 70, 80] },
                            ]
                    },
                    {
                        rowId: 2,
                        data:
                            [
                                { colId: 1, val: "สินค้า B" },
                                { colId: 2, val: "3 ปี" },
                                { colId: 3, val: [60, 80, 90] },
                            ]
                    },
                    {
                        rowId: 3,
                        data:
                            [
                                { colId: 1, val: "สินค้า C" },
                                { colId: 2, val: "4 ปี" },
                                { colId: 3, val: [50, 60, 70] },
                            ]
                    },
                ]
            },
            {
                tableId: 2,
                title: "รายการสินค้า ชุดที่ 2",
                rowData: [
                    {
                        row: 1,
                        data:
                            [
                                { col: 1, val: "สินค้า D" },
                                { col: 2, val: "2 ปี" },
                                { col: 3, val: [60, 70, 80] },
                            ]
                    },
                    {
                        row: 2,
                        data:
                            [
                                { col: 1, val: "สินค้า E" },
                                { col: 2, val: "3 ปี" },
                                { col: 3, val: [60, 80, 90] },
                            ]
                    },
                    {
                        row: 3,
                        data:
                            [
                                { col: 1, val: "สินค้า F" },
                                { col: 2, val: "4 ปี" },
                                { col: 3, val: [50, 60, 70] },
                            ]
                    },
                ]
            },
        ]
    },
    operationCost: {
        data: [

        ],
    },
    revenue: {
        data: {
            serviceData: [

            ],
            productData: [

            ],
        }
    },
    miscellaneous: {
        data: [

        ],
    },
}

export default BIZTOOL_PAGE_MOCKDATA