import { Card } from 'kit/components/card'
import { Container } from 'kit/components/container'
import { UniversalForm } from 'components/universal-form'
import { TUniversalFormField } from 'components/universal-form/universal-form-field'
import { FormField } from 'components/universal-form/universal-form.types'
import { FIELDS_OF_ACTIVITY } from 'utils/fields-of-activity'
import { LOCATIONS } from 'utils/locations'
import headerImg from 'assets/images/resume-form.png'
import { ReactComponent as Logo } from 'assets/images/logo.svg'
import { useCreateResumeMutation } from 'api/enhancedApi'
import { useLocation } from 'wouter'
import styles from './create-resume-page.module.scss'

const resumeFields: TUniversalFormField[] = [
  {
    label: 'Фамилия',
    isRequired: false,
    description: '(не будет публиковаться)',
    fieldName: 'lastName',
    type: FormField.Text,
  },
  {
    label: 'Имя',
    isRequired: true,
    fieldName: 'firstName',
    type: FormField.Text,
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
    label: 'Возраст',
    isRequired: true,
    fieldName: 'age',
    type: FormField.Text,
  },
  {
    label: 'Место жительства',
    isRequired: true,
    fieldName: 'location',
    dropdownItems: LOCATIONS,
    type: FormField.Dropdown,
  },
  {
    label: 'Желаемая должность, работа',
    isRequired: false,
    fieldName: 'position',
    type: FormField.Text,
  },
  {
    label: 'Ваша профессиональная область деятельности',
    isRequired: true,
    fieldName: 'fieldOfActivity',
    dropdownItems: FIELDS_OF_ACTIVITY,
    type: FormField.Dropdown,
  },
  {
    label: 'Образование',
    isRequired: false,
    description: 'Где вы учились или учитесь по настоящее время?',
    fieldName: 'education',
    type: FormField.Textarea,
  },
  {
    label: 'Опыт работы',
    isRequired: false,
    description: 'Если раньше работали где-то, расскажите где работали, в какой должности?',
    fieldName: 'workExperience',
    type: FormField.Textarea,
  },
  {
    label: 'О себе',
    isRequired: false,
    description:
      'Чтобы побудить работодателя пригласить именно Вас, расскажите о своих качествах, знаниях, увлечениях, которые, как вам кажется, будут полезны работодателю',
    fieldName: 'aboutMe',
    type: FormField.Textarea,
  },
]

export function CreateResumePage() {
  const [, setLocation] = useLocation()
  const [createResumeMutation] = useCreateResumeMutation()

  function onSubmitForm(data: any) {
    createResumeMutation({ input: data }).finally(() => setLocation('/'))
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Container className={styles.headerContainer}>
          <img className={styles.headerImg} src={headerImg} alt='resume img' />
          <h2 className={styles.headerTitle}>Форма резюме</h2>
          <p className={styles.headerSubtitle}>(пункты, отмеченные красной звездой, обязательны для заполнения)</p>
        </Container>
      </div>
      <div className={styles.main}>
        <Container>
          <Card className={styles.formContainer}>
            <UniversalForm
              onSubmitForm={onSubmitForm}
              buttonText='Продолжить'
              bottomText='Дабы мы имели возможность оказать Вам содействие в трудоустройстве, нажимая "отправить", вы даете свое согласие на обработку персональных данных согласно ФЗ №152 от 27.07.2006'
              fields={resumeFields}
            />
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
