import { Card } from 'components/card'
import { Container } from 'components/container'
import { UniversalForm } from 'components/universal-form'
import { TUniversalFormField } from 'components/universal-form/universal-form-field'
import { FormField } from 'components/universal-form/universal-form.types'
import { FIELDS_OF_ACTIVITY_TO_DROPDOWN_ITEMS } from 'utils/fields-of-activity'
import { LOCATIONS_TO_DROPDOWN_ITEMS } from 'utils/locations'
import headerImg from 'assets/images/vacancy-form.png'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import styles from './create-vacancy-page.module.scss'

const vacancyFields: TUniversalFormField[] = [
  {
    label: 'Должность',
    isRequired: true,
    description: 'Кого вы ищете или хотите нанять',
    fieldName: 'position',
    type: FormField.Text,
  },
  {
    label: 'Профессиональная область деятельности',
    isRequired: true,
    fieldName: 'fieldOfActivity',
    type: FormField.Dropdown,
    dropdownItems: FIELDS_OF_ACTIVITY_TO_DROPDOWN_ITEMS,
  },
  {
    label: 'Обязанности сотрудника',
    isRequired: false,
    description: 'Что должен будет делать сотрудник',
    fieldName: 'employeeResponsibilities',
    type: FormField.Textarea,
  },
  {
    label: 'Требования к сотруднику',
    isRequired: false,
    description: 'Каким требованиям должен соответствовать сотрудник? К примеру: пол, возраст, наличие диплома, опыт и т.д.',
    fieldName: 'employeeRequirements',
    type: FormField.Textarea,
  },
  {
    label: 'Информация о работодателе, работе',
    isRequired: false,
    description: 'К примеру, расскажите о возможностях и преимуществах работы у вас',
    fieldName: 'employerInfo',
    type: FormField.Textarea,
  },
  {
    label: 'Рабочий график',
    isRequired: false,
    fieldName: 'workSchedule',
    type: FormField.Date,
  },
  {
    label: 'Место работы',
    isRequired: true,
    fieldName: 'placeOfWork',
    type: FormField.Dropdown,
    dropdownItems: LOCATIONS_TO_DROPDOWN_ITEMS,
  },
  {
    label: 'Номер телефона',
    isRequired: true,
    fieldName: 'phone',
    type: FormField.Phone,
    actions: [
      {
        label: 'Скрыть номер телефона',
        onClick: () => {},
      },
    ],
  },
  {
    label: 'Имя или наименование организации',
    isRequired: true,
    fieldName: 'organizationName',
    type: FormField.Text,
  },
]

export function CreateVacancyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Container className={styles.headerContainer}>
          <img className={styles.headerImg} src={headerImg} alt='vacancy img' />
          <h2 className={styles.headerTitle}>Форма вакансии</h2>
          <p className={styles.headerSubtitle}>(пункты, отмеченные красной звездой, обязательны для заполнения)</p>
        </Container>
      </div>
      <div className={styles.main}>
        <Container>
          <Card className={styles.formContainer}>
            <UniversalForm buttonText='Разместить вакансию' fields={vacancyFields} />
          </Card>
        </Container>
      </div>
      <div className={styles.footer}>
        <Container className={styles.footerContainer}>
          <Logo className={styles.footerLogo} />
          <p className={styles.footerCopyright}>© 2021 Кадровое агентство «Rabota06»</p>
        </Container>
      </div>
    </div>
  )
}
