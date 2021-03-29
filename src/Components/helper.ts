import { StrBoxCheckbox } from "./Custom-Checkbox/CustomCheckbox"
import { StrTable, ColumnType } from './Table-Data/TableData'
import { TitleTestTable, DataItem } from './test-table/TestTable'

export const titleTestTable: TitleTestTable[] = [
    {
        title: 'Title1',
        icon: ColumnType.checkBox
    },
    {
        title: 'Title2',
        icon: ColumnType.checkBox
    },
    {
        title: 'Title3',
        icon: ColumnType.search
    },
    {
        title: 'Title4',
        icon: ColumnType.checkBox
    },
    {
        title: 'Title5',
        icon: ColumnType.search
    },
    {
        title: 'Title6',
        icon: ColumnType.search
    }
]

export const dataTestTable: DataItem[] = [
    {
        titleColumn: 'Name1',
        fields: [
            {
                status: 'true',
                result: 1,
                id: '1122-dlkkf',
                value: 'no-value',
                description: 'no-description'
            },
            {
                status: 'false',
                result: 2,
                id: '1121-dlkkf'
            }
        ]
    },
    {
        titleColumn: 'Name2',
        fields: [
            {
                status: 'false',
                result: 2,
                id: '1124-dlkkf',
                value: 'no-value',
                description: 'no-description'
                
            },
            {
                status: 'false',
                result: 2,
                id: '1342-dlkkf',
                value: 'no-value',
                description: 'no-description'
            }
        ]
    },
    {
        titleColumn: 'Name3',
        fields: [
            {
                status: 'true',
                result: 1,
                id: '11002-dlkkf'
            },
            {
                status: 'true',
                result: 1,
                id: '1092-dlkkf'
            },
            {
                status: 'true',
                result: 1,
                id: '7822-dlkkf'
            }
        ]
    },
    {
        titleColumn: 'Name4',
        fields: [
            {
                status: 'true',
                result: 1,
                id: '1100222-dlkkf'
            },
            {
                status: 'true',
                result: 1,
                id: '109222-dlkkf'
            },
            {
                status: 'true',
                result: 1,
                id: '782222-dlkkf'
            },
            {
                status: 'true',
                result: 1,
                id: '78233-dlkkf'
            }
        ]
    }
]


export const titleHeadingColumn: StrTable[] = [
    {
        title: 'Text1',
        id: '1',
        type: ColumnType.search,
    },
    {
        title: 'Text2',
        id: '2',
        type: ColumnType.checkBox,
    },
    {
        title: 'Text1',
        id: '3',
        type: ColumnType.search,
    },
    {
        title: 'Text2',
        id: '4',
        type: ColumnType.checkBox,
    }
]


export const titleCheckBox: StrBoxCheckbox[] = [
    {
        title: 'Text01',
        id: '01'
    },
    {
        title: 'Text02',
        id: '02'
    },
    {
        title: 'Text03',
        id: '03'
    },
    {
        title: 'Text04',
        id: '04'
    },
    {
        title: 'Text05',
        id: '05'
    },
]
