const BIZTOOL_PAGE_MOCKDATA = {
    pageConfig: {
        data: {
        },
    },
    totalInvestment: {
        data: [
            {
                tableId: 1,
                title: "ร้านตัดผม",
                rowData: [
                    {
                        rowId: 1,
                        data:
                            [
                                { colId: 1, val: "ค่าที่ดิน" },
                                { colId: 2, val: 1200000 },
                                { colId: 3, val: "สินทรัพย์ถาวรที่มีตัวตน" },
                                { colId: 4, val: new Date() },
                            ]
                    },
                    {
                        rowId: 2,
                        data:
                            [
                                { colId: 1, val: "ค่าก่อสร้าง" },
                                { colId: 2, val: 1000000 },
                                { colId: 3, val: "สินทรัพย์ถาวรที่มีตัวตน" },
                                { colId: 4, val: new Date() },
                            ]
                    },
                    {
                        rowId: 3,
                        data:
                            [
                                { colId: 1, val: "ค่าเฟอร์นิเจอร์​" },
                                { colId: 2, val: 75000 },
                                { colId: 3, val: "สินทรัพย์ถาวรที่มีตัวตน" },
                                { colId: 4, val: new Date() },
                            ]
                    },
                    {
                        rowId: 3,
                        data:
                            [
                                { colId: 1, val: "ค่าเครื่องมือช่าง​" },
                                { colId: 2, val: 70000 },
                                { colId: 3, val: "สินทรัพย์ถาวรที่มีตัวตน" },
                                { colId: 4, val: new Date() },
                            ]
                    },
                ]
            },
            {
                tableId: 2,
                title: "รายการสินค้า ชุดที่ 2",
                rowData: [
                    {
                        rowId: 1,
                        data:
                            [
                                { colId: 1, val: "สินค้า D" },
                                { colId: 2, val: "2 ปี" },
                                { colId: 3, val: [60, 70, 80] },
                                { colId: 4, val: new Date() },
                            ]
                    },
                    {
                        rowId: 2,
                        data:
                            [
                                { colId: 1, val: "สินค้า E" },
                                { colId: 2, val: "3 ปี" },
                                { colId: 3, val: [60, 80, 90] },
                                { colId: 4, val: new Date() },
                            ]
                    },
                    {
                        rowId: 3,
                        data:
                            [
                                { colId: 1, val: "สินค้า F" },
                                { colId: 2, val: "4 ปี" },
                                { colId: 3, val: [50, 60, 70] },
                                { colId: 4, val: new Date() },
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