import { FieldOfActivity } from 'types/index'
import { ReactComponent as ITInternetImage } from 'assets/images/fields-of-activity/it-internet.svg'
import { ReactComponent as AutomotiveBusinessImage } from 'assets/images/fields-of-activity/automotive-business.svg'
import { ReactComponent as AccountingAndFinanceImage } from 'assets/images/fields-of-activity/accounting-and-finance.svg'
import { ReactComponent as TopManagementImage } from 'assets/images/fields-of-activity/top-management.svg'
import { ReactComponent as CivilServiceImage } from 'assets/images/fields-of-activity/civil-service.svg'
import { ReactComponent as HomeStaffImage } from 'assets/images/fields-of-activity/home-staff.svg'
import { ReactComponent as CommunalServicesImage } from 'assets/images/fields-of-activity/communal-services.svg'
import { ReactComponent as ArtAndEntertainmentImage } from 'assets/images/fields-of-activity/art-and-entertainment.svg'
import { ReactComponent as MarketingAndAdvertisingImage } from 'assets/images/fields-of-activity/marketing-and-advertising.svg'
import { ReactComponent as MedicineAndPharmacyImage } from 'assets/images/fields-of-activity/medicine-and-pharmacy.svg'
import { ReactComponent as EducationAndScienceImage } from 'assets/images/fields-of-activity/education-and-science.svg'
import { ReactComponent as SecurityAndSafetyImage } from 'assets/images/fields-of-activity/security-and-safety.svg'
import { ReactComponent as SalesImage } from 'assets/images/fields-of-activity/sales.svg'
import { ReactComponent as ProductionAndAgricultureImage } from 'assets/images/fields-of-activity/production-and-agriculture.svg'
import { ReactComponent as ConstructionImage } from 'assets/images/fields-of-activity/construction.svg'
import { ReactComponent as TransportAndLogisticsImage } from 'assets/images/fields-of-activity/transport-and-logistics.svg'
import { ReactComponent as TourismRestaurantsImage } from 'assets/images/fields-of-activity/tourism-restaurants.svg'
import { ReactComponent as PersonnelManagementImage } from 'assets/images/fields-of-activity/personnel-management.svg'
import { ReactComponent as FitnessAndBeautySalonsImage } from 'assets/images/fields-of-activity/fitness-and-beauty-salons.svg'
import { ReactComponent as JurisprudenceImage } from 'assets/images/fields-of-activity/jurisprudence.svg'
import { ReactComponent as OtherImage } from 'assets/images/fields-of-activity/other.svg'
import { FC, SVGProps } from 'react'
import { DropdownItem } from 'kit/components/dropdown'
import { objectKeys } from './object-keys'

export const FIELDS_OF_ACTIVITY_LABEL: Record<FieldOfActivity, string> = {
  [FieldOfActivity.ITAndInternet]: 'IT, интернет, телеком',
  [FieldOfActivity.AutomotiveBusiness]: 'Автомобильный бизнес',
  [FieldOfActivity.AccountingAndFinance]: 'Бухгалтерия, финансы',
  [FieldOfActivity.TopManagement]: 'Высший менеджмент',
  [FieldOfActivity.CivilService]: 'Госслужба, НКО',
  [FieldOfActivity.HomeStaff]: 'Домашний персонал',
  [FieldOfActivity.CommunalServices]: 'ЖКХ, эксплуатация',
  [FieldOfActivity.ArtAndEntertainment]: 'Искусство, развлечения',
  [FieldOfActivity.MarketingAndAdvertising]: 'Маркетинг, реклама, PR',
  [FieldOfActivity.MedicineAndPharmacy]: 'Медицина, фармацевтика',
  [FieldOfActivity.EducationAndScience]: 'Образование, наука',
  [FieldOfActivity.SecurityAndSafety]: 'Охрана, безопасность',
  [FieldOfActivity.Sales]: 'Продажи',
  [FieldOfActivity.ProductionAndAgriculture]: 'Производство, сырье, сельское хозяйство',
  [FieldOfActivity.Construction]: 'Строительство',
  [FieldOfActivity.TransportAndLogistics]: 'Транспорт, логистика',
  [FieldOfActivity.TourismRestaurants]: 'Туризм, рестораны',
  [FieldOfActivity.PersonnelManagement]: 'Управление персоналом',
  [FieldOfActivity.FitnessAndBeautySalons]: 'Фитнес, салоны красоты',
  [FieldOfActivity.Jurisprudence]: 'Юриспруденция',
  [FieldOfActivity.Other]: 'Другое',
}

export const FIELDS_OF_ACTIVITY: DropdownItem<FieldOfActivity>[] = objectKeys(FIELDS_OF_ACTIVITY_LABEL).map(id => ({
  id,
  label: FIELDS_OF_ACTIVITY_LABEL[id],
}))

export const FIELDS_OF_ACTIVITY_IMAGE: Record<FieldOfActivity, FC<SVGProps<SVGSVGElement>>> = {
  [FieldOfActivity.ITAndInternet]: ITInternetImage,
  [FieldOfActivity.AutomotiveBusiness]: AutomotiveBusinessImage,
  [FieldOfActivity.AccountingAndFinance]: AccountingAndFinanceImage,
  [FieldOfActivity.TopManagement]: TopManagementImage,
  [FieldOfActivity.CivilService]: CivilServiceImage,
  [FieldOfActivity.HomeStaff]: HomeStaffImage,
  [FieldOfActivity.CommunalServices]: CommunalServicesImage,
  [FieldOfActivity.ArtAndEntertainment]: ArtAndEntertainmentImage,
  [FieldOfActivity.MarketingAndAdvertising]: MarketingAndAdvertisingImage,
  [FieldOfActivity.MedicineAndPharmacy]: MedicineAndPharmacyImage,
  [FieldOfActivity.EducationAndScience]: EducationAndScienceImage,
  [FieldOfActivity.SecurityAndSafety]: SecurityAndSafetyImage,
  [FieldOfActivity.Sales]: SalesImage,
  [FieldOfActivity.ProductionAndAgriculture]: ProductionAndAgricultureImage,
  [FieldOfActivity.Construction]: ConstructionImage,
  [FieldOfActivity.TransportAndLogistics]: TransportAndLogisticsImage,
  [FieldOfActivity.TourismRestaurants]: TourismRestaurantsImage,
  [FieldOfActivity.PersonnelManagement]: PersonnelManagementImage,
  [FieldOfActivity.FitnessAndBeautySalons]: FitnessAndBeautySalonsImage,
  [FieldOfActivity.Jurisprudence]: JurisprudenceImage,
  [FieldOfActivity.Other]: OtherImage,
}

export function numberToFieldOfActivity(numb: number): FieldOfActivity {
  return numb as FieldOfActivity
}
