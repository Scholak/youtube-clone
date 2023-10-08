import { formatDistance } from 'date-fns'
import { tr } from 'date-fns/locale'

export const dateFormatter = (date: string) => {
  const currentDate = new Date(date)
  const formattedDate = formatDistance(currentDate, new Date(), {
		addSuffix: true,
		locale: tr,
	}).replace('yaklaşık ', '')

  return formattedDate
}