import ActionsEditIcon from 'shared/assets/icons/actions-edit-icon'
import PlayIcon from 'shared/assets/icons/play-icon'
import TrashIcon from 'shared/assets/icons/trash-icon'

import s from './decks-page.module.scss'

export function TableActions({ author }: { author?: boolean }) {
  return (
    <div className={s.actions}>
      <button className={s.actionButton}>
        <PlayIcon height={16} width={16} />
      </button>

      {author && (
        <>
          <button className={s.actionButton}>
            <ActionsEditIcon height={16} width={16} />
          </button>
          <button className={s.actionButton}>
            <TrashIcon height={16} width={16} />
          </button>
        </>
      )}
    </div>
  )
}
