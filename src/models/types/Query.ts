import { DateType } from "../enums/DateType"
import { RoverType } from "../enums/RoverType"

export type Query = {
    id: number
    name: string
    rover: RoverType
    camera: string
    dateFilter: DateType
    dateValue: string
}


