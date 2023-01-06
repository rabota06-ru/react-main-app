import { FieldOfActivity, Locations } from 'types/index'

export interface Filters {
  keywords: string
  fieldOfActivity: FieldOfActivity | null
  location: Locations | null
}
