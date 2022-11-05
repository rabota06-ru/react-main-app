import { FieldOfActivity } from 'types/index'
import ITInternetImage from 'assets/images/fields-of-activity/it-internet.png'
import AutomotiveBusinessImage from 'assets/images/fields-of-activity/automotive-business.png'
import AccountingAndFinanceImage from 'assets/images/fields-of-activity/accounting-and-finance.png'
import TopManagementImage from 'assets/images/fields-of-activity/top-management.png'
import CivilServiceImage from 'assets/images/fields-of-activity/civil-service.png'
import HomeStaffImage from 'assets/images/fields-of-activity/home-staff.png'
import CommunalServicesImage from 'assets/images/fields-of-activity/communal-services.png'
import ArtAndEntertainmentImage from 'assets/images/fields-of-activity/art-and-entertainment.png'
import MarketingAndAdvertisingImage from 'assets/images/fields-of-activity/marketing-and-advertising.png'
import MedicineAndPharmacyImage from 'assets/images/fields-of-activity/medicine-and-pharmacy.png'
import EducationAndScienceImage from 'assets/images/fields-of-activity/education-and-science.png'
import SecurityAndSafetyImage from 'assets/images/fields-of-activity/security-and-safety.png'
import SalesImage from 'assets/images/fields-of-activity/sales.png'
import ProductionAndAgricultureImage from 'assets/images/fields-of-activity/production-and-agriculture.png'
import ConstructionImage from 'assets/images/fields-of-activity/construction.png'
import TransportAndLogisticsImage from 'assets/images/fields-of-activity/transport-and-logistics.png'
import TourismRestaurantsImage from 'assets/images/fields-of-activity/tourism-restaurants.png'
import PersonnelManagementImage from 'assets/images/fields-of-activity/personnel-management.png'
import FitnessAndBeautySalonsImage from 'assets/images/fields-of-activity/fitness-and-beauty-salons.png'
import JurisprudenceImage from 'assets/images/fields-of-activity/jurisprudence.png'
import OtherImage from 'assets/images/fields-of-activity/other.png'
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

export const FIELDS_OF_ACTIVITY: { field: FieldOfActivity; label: string }[] = objectKeys(FIELDS_OF_ACTIVITY_LABEL).map(field => ({
  field,
  label: FIELDS_OF_ACTIVITY_LABEL[field],
}))

export const FIELDS_OF_ACTIVITY_IMAGE: Record<FieldOfActivity, string> = {
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
