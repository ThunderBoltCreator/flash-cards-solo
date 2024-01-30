import { toast } from 'react-toastify'

export function errorHandler(e: any) {
  toast.error(e.data.message)
}
