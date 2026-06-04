const express = require("express");
const app = express();
const PORT = 3000;

// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱하기 위함
app.use(express.json());
// 임시 데이터베이스 (메모리 배열)
let users = [
  { id: 1, name: "홍길동", email: "hong@example.com" },
  { id: 2, name: "이순신", email: "lee@example.com" },
];

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중
입니다.`);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  // 간단한 유효성 검사
  if (!name || !email) {
    return res
      .status(400)
      .json({ message: "이름과 이메일을 모두 입력해주세요." });
  }
  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1, // 간단한 ID 생성 규칙
    name,
    email,
  };
  users.push(newUser);
  res.status(201).json({ message: "사용자가 등록되었습니다.", user: newUser });
});

// 전체 조회
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
// 특정 사용자 조회 (ID 기준)
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "사용자를 찾을수 없습니다." });
  }
  res.status(200).json(user);
});

app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "사용자를 찾을수 없습니다." });
  }
  // 데이터 수정 (전달된 값만 수정하거나 전체 교체)
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
  };
  res
    .status(200)
    .json({ message: "사용자 정보가 수정되었습니다.", user: users[userIndex] });
});

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "사용자를 찾을수 없습니다." });
  }
  // 배열에서 해당 인덱스의 요소 삭제
  const deletedUser = users.splice(userIndex, 1);
  res
    .status(200)
    .json({ message: "사용자가 삭제되었습니다.", user: deletedUser[0] });
});
