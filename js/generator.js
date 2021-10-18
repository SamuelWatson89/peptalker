var part1 = document.getElementById("part1");
var part2 = document.getElementById("part2");
var part3 = document.getElementById("part3");
var part4 = document.getElementById("part4");

var section1 = [
  "Champ",
  "Fact:",
  "Everybody says",
  "Dang...",
  "Check it",
  "Just saying...",
  "Superstar",
  "Tiger,",
  "Self,",
  "Know this:",
  "News alert:",
  "Girl,",
  "Aces,",
  "Excuse me but",
  "Experts agree:",
  "In my opinion,",
  "Hear ye, Hear ye:",
  "Okay, listen up:",
];
var section2 = [
  "the mere idea of you",
  "your soul",
  "your hair today",
  "everything you do",
  "your personal style",
  "every thought you have",
  "that sparkle in your eye",
  "your presence here",
  "what you got going on",
  "the essential you",
  "your life's journey",
  "that saucy personality",
  "your DNA",
  "that brain of yours",
  "your choice of attire",
  "the way you roll",
  "whatever your secret is",
  "all of y'all",
];
var section3 = [
  "has serious game,",
  "rains magic,",
  "deserves the Nobel Prize,",
  "raises the roof",
  "breeds miracles,",
  "is paying off big time,",
  "shows mad skills,",
  "just shimmers,",
  "is a national treasure,",
  "gets the party hopping,",
  "is the next big thing,",
  "roars like a lion,",
  "is a rainbow factory,",
  "is ma deof diamonds,",
  "makes the birds sing,",
  "should be taught in school,",
  "makes the world go 'round,",
  "is 100% legit,",
];
var section4 = [
  "24/7",
  "can i get an amen?",
  "and that's a fact",
  "so treat yourself",
  "you feel me?",
  "that's just science",
  "would i lie?",
  "for reals.",
  "mic drop.",
  "you hidden gem.",
  "snuggle bear.",
  "period.",
  "now lets dance.",
  "high five.",
  "say it again!",
  "according to BBC.",
  "so get used to it.",
];

function generatePep() {
  part1.innerHTML = section1[Math.floor(Math.random() * section1.length)];
  part2.innerHTML = section2[Math.floor(Math.random() * section2.length)];
  part3.innerHTML = section3[Math.floor(Math.random() * section3.length)];
  part4.innerHTML = section4[Math.floor(Math.random() * section4.length)];
}
