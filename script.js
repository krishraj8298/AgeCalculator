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
    { name: "Capricorn", emoji: "♑️", start: "12-22", end: "01-19" },
    { name: "Aquarius", emoji: "♒️", start: "01-20", end: "02-18" },
    { name: "Pisces", emoji: "♓️", start: "02-19", end: "03-20" },
    { name: "Aries", emoji: "♈️", start: "03-21", end: "04-19" },
    { name: "Taurus", emoji: "♉️", start: "04-20", end: "05-20" },
    { name: "Gemini", emoji: "♊️", start: "05-21", end: "06-20" },
    { name: "Cancer", emoji: "♋️", start: "06-21", end: "07-22" },
    { name: "Leo", emoji: "♌️", start: "07-23", end: "08-22" },
    { name: "Virgo", emoji: "♍️", start: "08-23", end: "09-22" },
    { name: "Libra", emoji: "♎️", start: "09-23", end: "10-22" },
    { name: "Scorpio", emoji: "♏️", start: "10-23", end: "11-21" },
    { name: "Sagittarius", emoji: "♐️", start: "11-22", end: "12-21" }
  ];

  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  const birthMD = (month < 10 ? "0" : "") + month + "-" + (day < 10 ? "0" : "") + day;

  let zodiac = "Unknown";
  let emoji = "";

  for (let sign of zodiacSigns) {
    if (sign.start <= sign.end) {
      // Normal signs (e.g., Aries, Taurus, etc.)
      if (birthMD >= sign.start && birthMD <= sign.end) {
        zodiac = sign.name;
        emoji = sign.emoji;
        break;
      }
    } else {
      // Signs that wrap over the year-end (Capricorn)
      if (birthMD >= sign.start || birthMD <= sign.end) {
        zodiac = sign.name;
        emoji = sign.emoji;
        break;
      }
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
