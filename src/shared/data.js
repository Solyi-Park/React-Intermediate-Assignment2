import uuid from "react-uuid";
import formatTime from "./formatTime";

function data() {
  const jsonData = [
    {
      createdAt: "2023-11-03T02:07:09.423Z",
      nickName: "Dr. Clint Christiansen",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      content:
        "호동 Vitae recusandae tenetur debitis impedit ut dolorem atque reprehenderit magnam. Cum dolor magnam commodi qui perferendis. Vel temporibus soluta. Eum delectus blanditiis. Neque dicta non quod ex. Maiores aspernatur fuga reprehenderit a magni eaque fuga voluptatum hic.",
      member: "호동",
      id: uuid(),
    },
    {
      createdAt: "2023-11-02T23:13:18.491Z",
      nickName: "Chad Graham",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/298.jpg",
      content:
        "수근 Ipsam aspernatur nostrum eos unde velit molestiae dolorem. Tenetur ullam nostrum pariatur. Et in eos. Harum commodi ipsa quaerat aspernatur quod dignissimos quae quidem sapiente.",
      member: "수근",
      id: uuid(),
    },
    {
      createdAt: "2023-11-02T11:25:37.026Z",
      nickName: "Tommy Abshire",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/646.jpg",
      content:
        "지원 Itaque nihil quae neque itaque. Non a officiis ducimus nemo consectetur. Ducimus libero voluptatum consequuntur.",
      member: "지원",
      id: uuid(),
    },
    {
      createdAt: "2023-11-02T16:06:34.150Z",
      nickName: "Max Mayert",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
      content:
        "규현 Sint qui eligendi repudiandae placeat maiores repudiandae assumenda repudiandae. Distinctio commodi iste. Qui architecto iusto.",
      member: "규현",
      id: uuid(),
    },
    {
      createdAt: "2023-11-03T05:40:17.575Z",
      nickName: "Olga Christiansen",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      content:
        "민호 Molestiae saepe reiciendis saepe natus quo occaecati. Vel vero illum quo. Ducimus maiores porro optio illum officia nam. Cum possimus aut consequatur eaque libero ad nihil pariatur officiis.",
      member: "민호",
      id: uuid(),
    },
    {
      createdAt: "2023-11-03T05:40:17.575Z",
      nickName: "Olga Christiansen",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/720.jpg",
      content:
        "피오 Molestiae saepe reiciendis saepe natus quo occaecati. Vel vero illum quo. Ducimus maiores porro optio illum officia nam. Cum possimus aut consequatur eaque libero ad nihil pariatur officiis.",
      member: "피오",
      id: uuid(),
    },
  ];
  // const initialState = [
  //   {
  //     id: uuid(),
  //     nickName: "팬1",
  //     content: "패션왕 도니!",
  //      member: "형돈",
  //     postTime: formatTime(),
  //   },
  //   {
  //     id: uuid(),
  //     nickName: "팬2",
  //     content: "영원한 일인자",
  //      member: "재석",
  //     postTime: formatTime(),
  //   },
  //   {
  //     id: uuid(),
  //     nickName: "팬3",
  //     content: "돌 + I 킹!",
  //      member: "홍철",
  //     postTime: formatTime(),
  //   },
  //   {
  //     id: uuid(),
  //     nickName: "팬4",
  //     content: "아부지~",
  //      member: "명수",
  //     postTime: formatTime(),
  //   },
  //   {
  //     id: uuid(),
  //     nickName: "팬5",
  //     content: "쩌리짱",
  //      member: "준하",
  //     postTime: formatTime(),
  //   },
  //   {
  //     id: uuid(),
  //     nickName: "팬6",
  //     content: "하이브리드 리오레이비 쌤이솟아",
  //      member: "하하",
  //     postTime: formatTime(),
  //   },
  // ];

  return jsonData;
}

export default data;
