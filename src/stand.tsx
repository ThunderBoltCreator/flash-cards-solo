import { useState } from 'react'

import { CheckEmailPage, NewPasswordPage } from 'features/forgot-password'
import { ForgotPassword } from 'pages/auth/forgot-password'
import { SignIn } from 'pages/auth/sign-in'
import { SignUp } from 'pages/auth/sign-up'
import { Profile } from 'pages/profile'
import { Button } from 'shared/ui/button'
import { Checkboxes } from 'shared/ui/checkbox'
import { Slider } from 'shared/ui/slider'
import { PasswordFields, SearchField, TextFields } from 'shared/ui/text-field'
import { CardSwitcher } from 'widgets/card-switcher'

export function Stand() {
  const [sliderValues, setSliderValues] = useState<number[]>([10, 50])

  return (
    <>
      <Button as={'div'}>Knopka</Button>
      <SearchField placeholder={'sdasds'} />
      <PasswordFields.base placeholder={'sdasds'} />
      <TextFields.base placeholder={'sdasds'} />
      <Slider
        className={'center'}
        max={50}
        min={10}
        onValueChange={setSliderValues}
        style={{ maxWidth: '300px' }}
        value={sliderValues}
      />
      <CardSwitcher />
      <div>
        <Checkboxes.base className={'app_center'} label={'Checkbox'} />
      </div>
      <Profile />
      <SignIn />
      <SignUp />
      <ForgotPassword />
      <CheckEmailPage />
      <NewPasswordPage />
    </>
  )
}
