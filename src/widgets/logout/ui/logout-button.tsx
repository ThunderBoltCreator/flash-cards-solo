import { useLogoutMutation } from 'entities/session'
import LogoutIcon from 'shared/assets/icons/log-out'
import { Button } from 'shared/ui/button'
import { Typography } from 'shared/ui/typography'

export function LogoutButton() {
  const [logout] = useLogoutMutation()

  return (
    <Button icon={<LogoutIcon />} onClick={() => logout()} variant={'secondary'}>
      <Typography variant={'subtitle2'}>Logout</Typography>
    </Button>
  )
}
