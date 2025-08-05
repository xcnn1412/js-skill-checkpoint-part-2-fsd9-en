const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

const totalScore = students
  .filter(student => student.score > 50)  //Upper 50
  .map(student => student.score * 1.1)  //+10%
  .reduce((sum , currentScore) => sum + currentScore, 0); //sum Score

  const conScore = totalScore.toFixed(1); // 1 decimal is Hereeeee
  console.log(`Total Score is ${conScore}`);
