import { Camera } from "./Camera"
import { Rover } from "./Rover"

export type Photo = {
    id: number
    img_src: string
    sol: string
    earth_date: string
    camera: Camera,
    rover: Rover
}