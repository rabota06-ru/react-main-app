import { DropdownItem } from 'kit/components/dropdown'
import { Locations } from 'types/index'
import { objectKeys } from 'kit/utils'

export const LOCATIONS_LABEL: Record<Locations, string> = {
  [Locations.Nazran]: 'Назрань',
  [Locations.Magas]: 'Магас',
  [Locations.Karabulak]: 'Карабулак',
  [Locations.Sunzha]: 'Сунжа',
  [Locations.Malgobek]: 'Малгобек',
  [Locations.AliYurt]: 'Али-Юрт',
  [Locations.Altievo]: 'Альтиево',
  [Locations.Barsuki]: 'Барсуки',
  [Locations.GaziYurt]: 'Гази-Юрт',
  [Locations.Gamurzievo]: 'Гамурзиево',
  [Locations.Dolakovo]: 'Долаково',
  [Locations.Kantyshevo]: 'Кантышево',
  [Locations.NasyrKort]: 'Насыр-Корт',
  [Locations.Plievo]: 'Плиево',
  [Locations.Surkhakhi]: 'Сурхахи',
  [Locations.Ekazhevo]: 'Экажево',
  [Locations.Nesterovskoe]: 'Нестеровское',
  [Locations.Troitskoe]: 'Троицкое',
  [Locations.VerhnieAchaluki]: 'Верхние Ачалуки',
  [Locations.SrednieAchaluki]: 'Средние Ачалуки',
  [Locations.NizhnieAchaluki]: 'Нижние Ачалуки',
}

export const LOCATIONS: DropdownItem<Locations>[] = objectKeys(LOCATIONS_LABEL).map(id => ({
  id,
  label: LOCATIONS_LABEL[id],
}))

export function numberToLocation(number: number): Locations {
  return number as Locations
}
