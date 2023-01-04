import { GetVacanciesQuery } from 'api/generated'

interface VacancyProps {
  vacancy: GetVacanciesQuery['vacancies'][number]
}

export function Vacancy({ vacancy }: VacancyProps) {
  return <div>{vacancy.id}</div>
}
