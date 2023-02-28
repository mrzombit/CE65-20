const BIZTOOL_PAGE_CONFIG = {
    pageConfig: {

    },
    totalInvestment: {
        type: "total-investment",
        title: "ต้นทุนธุรกิจ",
        addTableHandleFunction: (input) => {
            alert("popup!")
        },
        onChangeHandle: (table, row, col, value) => {
            console.log(`talble #${table}`);
            console.log(`${row}, ${col}, ${value}`)
        },
        tableStyle: {
            showColumnHeader: true,
            column: [
                {
                    colId: 1,
                    title: "ชื่อตาราง",
                    width: 300,
                    type: "text",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    editable: true,
                },
                {
                    colId: 2,
                    title: "จำนวน(บาท)",
                    width: 200,
                    type: "money",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    editable: true,
                },
                {
                    colId: 3,
                    title: "ประเภทสินทรัพย์",
                    width: 200,
                    type: "dropdown",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    enumData: [
                        {
                            title: "สินทรัพย์ถาวรที่มีตัวตน",
                            value: 1,
                        },
                        {
                            title: "สินทรัพย์ไม่มีตัวตน",
                            value: 2,
                        },
                        {
                            title: "สินทรัพย์ถาวร",
                            value: 3,
                        },
                    ],
                    editable: true,
                },
                {
                    colId: 4,
                    title: "วันที่ลงทุน",
                    width: 200,
                    type: "date",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    editable: true,
                },
            ],
        }
        // addresstable: ["r1c1",]
    },
    operationCost: {
        type: "operation-cost",
        title: "ค่าใช้จ่ายประจำ",
        addTableHandleFunction: (input) => {
            alert("popup!")
        },
        onChangeHandle: (table, row, col, value) => {
            console.log(`${row}, ${col}, ${value}`)
        },
    },
    revenue: {
        type: "revenue",
        title: "รายรับ",
        addTableHandleFunction: {
            addTableHandleServiceFunction: (input) => {
                alert("service")
            },
            addTableHandleProductFunction: (input) => {
                alert("product")
            },
        },
        onChangeHandle: {
            onServiceChangeHandle: (table, row, col, value) => {
                console.log(`${row}, ${col}, ${value}`)
            },
            onProductChangeHandle: (table, row, col, value) => {
                console.log(`${row}, ${col}, ${value}`)
            },
        },
        tableStyle: {
            productTableStyle: {

            },
            serviceTableStyle: {

            },
        }
    },
    miscellaneous: {
        type: "miscellaneous",
        title: "เงินกู้และหุ้นส่วน",
        addTableHandleFunction: (input) => {
            alert("popup!")
        },
        onChangeHandle: (table, row, col, value) => {
            console.log(`${row}, ${col}, ${value}`)
        },
    },
}

export default BIZTOOL_PAGE_CONFIG