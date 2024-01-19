import { useState } from 'react'

import { Profile } from 'pages/profile'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button/button'
import { Checkbox } from 'shared/ui/checkbox/checkbox'
import { Header } from 'shared/ui/header/header'
import { Slider } from 'shared/ui/slider'
import { TextFields } from 'shared/ui/text-field'
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
      <TextFields.Search placeholder={'sdasds'} />
      <TextFields.Password placeholder={'sdasds'} />
      <TextFields.BaseField placeholder={'sdasds'} />
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
        <Checkbox className={'app_center'} label={'Checkbox'} />
      </div>
      <Profile />
    </div>
  )
}
