import { useState } from 'react'

import { clsx } from 'clsx'
import { DecksSwitcher } from 'features/card-switcher'
import TrashIcon from 'shared/assets/icons/trash-icon'
import { Button } from 'shared/ui/button'
import { Slider } from 'shared/ui/slider'
import { SearchField } from 'shared/ui/text-field'
import { useMinMaxCardsQuery } from 'widgets/decks-sort/api/deck-sort-api'

import s from './decks-sort.module.scss'

type DecksSortProps = {
  authorForShow: string
  changeDecksAuthorFilter: (newAuthor: string) => void
  changeName: (name: string) => void
  className?: string
  onChangeCardsCount: (minMax: number[]) => void
  onClearFilter: () => void
}
export function DecksSort({
  authorForShow,
  changeDecksAuthorFilter,
  changeName,
  className,
  onChangeCardsCount,
  onClearFilter,
}: DecksSortProps) {
  const { data } = useMinMaxCardsQuery()

  const [minMaxCardsCount, setMinMaxCardsCount] = useState<number[]>([
    data?.min || 0,
    data?.max || 61,
  ])

  const onSliderSubmit = (arg: number[]) => {
    onChangeCardsCount(arg)
  }

  const handleClearFilter = () => {
    onClearFilter()
    if (data) {
      setMinMaxCardsCount([data?.min, data?.max])
    }
  }

  return (
    <div className={clsx(s.root, className)}>
      <SearchField className={s.search} onValueChange={changeName} placeholder={'Input search'} />
      <DecksSwitcher defaultValue={authorForShow} onChangeDecks={changeDecksAuthorFilter} />
      <Slider
        label={'Number of Cards'}
        max={data?.max ?? 61}
        min={data?.min ?? 0}
        onValueChange={setMinMaxCardsCount}
        onValueCommit={onSliderSubmit}
        value={minMaxCardsCount}
      />
      <Button
        icon={<TrashIcon />}
        iconPosition={'left'}
        onClick={handleClearFilter}
        variant={'secondary'}
      >
        Clear Filter
      </Button>
    </div>
  )
}
