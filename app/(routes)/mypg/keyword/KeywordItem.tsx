import { IconDelete, IconSend } from '@/components/icon';
import classNames from 'classnames';
import { IKeyword } from './page';

interface Props {
  keywordInfo: IKeyword;
  handleDelete: (id: number) => void;
}
export default function KeywordItem({ keywordInfo, handleDelete }: Props) {
  const { id, word } = keywordInfo;
  return (
    <div>
      <div key={id} className={classNames('flex justify-between items-center h-14')}>
        <div>{word}</div>
        <div onClick={(e) => handleDelete(id)}>
          <IconDelete className="text-xl"></IconDelete>
        </div>
      </div>
    </div>
  );
}
