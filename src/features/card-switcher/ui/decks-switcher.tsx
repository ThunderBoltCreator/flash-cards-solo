import { clsx } from 'clsx'
import { Tabs } from 'shared/ui/tabs'
import { Typography } from 'shared/ui/typography'

import s from './decks-switcher.module.scss'

type CardSwitcherProps = {
  className?: string
  defaultValue: string
  onChangeDecks: (value: string) => void
}
export function DecksSwitcher({ className, defaultValue, onChangeDecks }: CardSwitcherProps) {
  const handleChange = (value: string) => {
    onChangeDecks(value)
  }

  return (
    <div className={clsx(s.root, className)}>
      <Typography as={'h2'} variant={'body2'}>
        Show packs cards
      </Typography>
      <Tabs.TabsRoot defaultValue={defaultValue} onValueChange={handleChange}>
        <Tabs.TabsList>
          <Tabs.TabsBtn value={'all'}>
            <Typography as={'span'} variant={'body1'}>
              All Cards
            </Typography>
          </Tabs.TabsBtn>
          <Tabs.TabsBtn value={'my'}>
            <Typography as={'span'} variant={'body1'}>
              My Cards
            </Typography>
          </Tabs.TabsBtn>
        </Tabs.TabsList>
      </Tabs.TabsRoot>
    </div>
  )
}
