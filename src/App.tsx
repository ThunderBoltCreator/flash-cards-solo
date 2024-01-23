import { useState } from 'react'
import { Flip, ToastContainer } from 'react-toastify'

import { CheckEmailPage, NewPasswordPage } from 'features/forgot-password'
import { ForgotPassword } from 'pages/auth/forgot-password'
import { SignIn } from 'pages/auth/sign-in'
import { SignUp } from 'pages/auth/sign-up'
import { Profile } from 'pages/profile'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button/button'
import { Checkboxes } from 'shared/ui/checkbox'
import { Header } from 'shared/ui/header/header'
import { Slider } from 'shared/ui/slider'
import { PasswordFields, SearchField, TextFields } from 'shared/ui/text-field'
import { CardSwitcher } from 'widgets/card-switcher/ui/card-switcher'

export function App() {
  const [sliderValues, setSliderValues] = useState<number[]>([10, 50])

  return (
    <div className={'stand'}>
      <Header
        rightSlot={
          <Avatar
            alt={'Jerry'}
            src={
              'https://cdn.dribbble.com/users/536736/screenshots/2443094/media/ec35f1e2d8943cd0e0d9b6674a626894.png'
            }
          />
        }
      />
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
      <ToastContainer
        autoClose={3000}
        closeOnClick
        newestOnTop
        position={'bottom-left'}
        theme={'dark'}
        transition={Flip}
      />
    </div>
  )
}
