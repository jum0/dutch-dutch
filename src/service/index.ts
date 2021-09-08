// input
// [
//   { name: '신세', cost: 39000 },
//   { name: '티케', cost: 6300 },
//   { name: '디토', cost: 17000 },
//   { name: '미키', cost: 0 },
//   { name: '주모', cost: 0 },
// ];

// output
// [
//   { sender: '티케', receiver: '신세', cost: 6160 },
//   { sender: '미키', receiver: '신세', cost: 12460 },
//   { sender: '주모', receiver: '신세', cost: 7920 },
//   { sender: '주모', receiver: '디토', cost: 4540 },
// ];

export const getResult = (
  data: { name: string; cost: number }[],
): { sender: string; receiver: string; cost: number }[] => {
  // 필요한 리스트 선언
  const nameList = data.map((obj) => obj.name);
  const costList = data.map((obj) => obj.cost);
  const moneyToReceiveList = new Array(data.length).fill(0);
  const moneyToSendList = new Array(data.length).fill(0);
  const resultList = [];

  // // 평균값 구하기
  const costPerPerson = costList.reduce((pre, cur) => pre + cur, 0) / costList.length;

  // 평균값 과의 차이를 계산해서 moneyToReceiveList와 moneyToSendList에 대입
  costList.forEach((cost, index) => {
    const difference = cost - costPerPerson;

    if (difference >= 0) {
      moneyToReceiveList[index] = difference;
    } else {
      moneyToSendList[index] = difference * -1;
    }
  });

  // 계산
  for (let i = 0; i < moneyToSendList.length; i++) {
    for (let j = 0; j < moneyToReceiveList.length; j++) {
      if (i !== j && moneyToSendList[i] !== 0 && moneyToReceiveList[j] !== 0) {
        if (moneyToSendList[i] >= moneyToReceiveList[j]) {
          resultList.push({
            sender: nameList[i],
            receiver: nameList[j],
            cost: Math.round(moneyToReceiveList[j] / 10) * 10,
          });
          moneyToSendList[i] -= moneyToReceiveList[j];
          moneyToReceiveList[j] = 0;
        } else {
          resultList.push({
            sender: nameList[i],
            receiver: nameList[j],
            cost: Math.round(moneyToSendList[i] / 10) * 10,
          });
          moneyToReceiveList[j] -= moneyToSendList[i];
          moneyToSendList[i] = 0;
        }
      }
    }
  }

  return resultList;
};
