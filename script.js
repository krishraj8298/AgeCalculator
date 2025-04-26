function calculateAge() {
  const name = document.getElementById("name").value.trim();
  const dob = document.getElementById("dob").value;
  const result = document.getElementById("result");
  const dayOfWeek = document.getElementById("dayOfWeek");

  if (!name || !dob) {
    result.innerHTML = "Please enter your name and date of birth.";
    dayOfWeek.innerHTML = "";
    return;
  }

  const birthDate = new Date(dob);
  const today = new Date();

  // Age Calculation
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  // Zodiac Sign Data
  const zodiacSigns = [
    { name: "Capricorn", emoji: "♑️", dates: ["12-22", "01-19"] },
    { name: "Aquarius",  emoji: "♒️", dates: ["01-20", "02-18"] },
    { name: "Pisces",    emoji: "♓️", dates: ["02-19", "03-20"] },
    { name: "Aries",     emoji: "♈️", dates: ["03-21", "04-19"] },
    { name: "Taurus",    emoji: "♉️", dates: ["04-20", "05-20"] },
    { name: "Gemini",    emoji: "♊️", dates: ["05-21", "06-20"] },
    { name: "Cancer",    emoji: "♋️", dates: ["06-21", "07-22"] },
    { name: "Leo",       emoji: "♌️", dates: ["07-23", "08-22"] },
    { name: "Virgo",     emoji: "♍️", dates: ["08-23", "09-22"] },
    { name: "Libra",     emoji: "♎️", dates: ["09-23", "10-22"] },
    { name: "Scorpio",   emoji: "♏️", dates: ["10-23", "11-21"] },
    { name: "Sagittarius", emoji: "♐️", dates: ["11-22", "12-21"] }
  ];

  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const birthMD = (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;

  let zodiac = "Unknown";
  let emoji = "";

  for (let sign of zodiacSigns) {
    const [start, end] = sign.dates;
    if (
      (birthMD >= start && birthMD <= "12-31") ||
      (birthMD >= "01-01" && birthMD <= end && start > end)
    ) {
      zodiac = sign.name;
      emoji = sign.emoji;
      break;
    } else if (birthMD >= start && birthMD <= end) {
      zodiac = sign.name;
      emoji = sign.emoji;
      break;
    }
  }

  result.innerHTML = `
    👤 <strong>${name}</strong>, you are <strong>${years}</strong> years, 
    <strong>${months}</strong> months, and <strong>${days}</strong> days old.<br>
    🪐 Your Zodiac Sign is <strong>${zodiac} ${emoji}</strong>.
  `;

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  dayOfWeek.innerHTML = `🗓️ You were born on a <strong>${daysOfWeek[birthDate.getDay()]}</strong>.`;
}

