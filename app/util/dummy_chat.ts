export interface IChat {
  id: number;
  name: string;
  address: string;
  time: string;
  message: string;
}

export const dummy_chats: IChat[] = [
  {
    id: 1,
    name: '요우',
    address: '군자동',
    time: '1주 전',
    message: '감사합니다!! 조심히가세요!'
  },
  {
    id: 2,
    name: '요이키',
    address: '문정동',
    time: '1주 전',
    message: '확인했습니다 감사합니다 :)'
  },
  {
    id: 3,
    name: 'chan',
    address: '구의동',
    time: '2주 전',
    message: '넵 수고하세용'
  },
  {
    id: 4,
    name: '오지',
    address: '보문동2가',
    time: '1달 전',
    message: '안녕하세요 답장이 너무 늦었네여 죄송···'
  },
  {
    id: 5,
    name: '누룽지',
    address: '면목동',
    time: '3달 전',
    message: '이람다님이 이모티콘을 보냈어요.'
  },
  {
    id: 6,
    name: 'kenny',
    address: '자양제4동',
    time: '3달 전',
    message: '네.'
  },
  {
    id: 7,
    name: '자리보금',
    address: '옥수동',
    time: '3달 전',
    message: '자리보금님이 이모티콘을 보냈어요.'
  },
  {
    id: 8,
    name: '리빙스턴',
    address: '면목동',
    time: '6달 전',
    message: '리빙스턴님이 이모티콘을 보냈어요.'
  },
  {
    id: 9,
    name: '꺄롱이',
    address: '중곡동',
    time: '7달 전',
    message: '옷 예쁘네요!'
  },
  {
    id: 10,
    name: '깨롱이',
    address: '중곡동',
    time: '7달 전',
    message: '네.'
  }
];

