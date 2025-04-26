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
    { name: "Capricorn", emoji: "♑️", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
    { name: "Aquarius", emoji: "♒️", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
    { name: "Pisces", emoji: "♓️", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
    { name: "Aries", emoji: "♈️", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
    { name: "Taurus", emoji: "♉️", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
    { name: "Gemini", emoji: "♊️", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
    { name: "Cancer", emoji: "♋️", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
    { name: "Leo", emoji: "♌️", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
    { name: "Virgo", emoji: "♍️", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
    { name: "Libra", emoji: "♎️", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
    { name: "Scorpio", emoji: "♏️", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
    { name: "Sagittarius", emoji: "♐️", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 }
  ];

  let zodiac = "Unknown";
  let emoji = "";

  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

  for (let sign of zodiacSigns) {
    if (
      (birthMonth === sign.startMonth && birthDay >= sign.startDay) ||
      (birthMonth === sign.endMonth && birthDay <= sign.endDay) ||
      (sign.startMonth < sign.endMonth && birthMonth > sign.startMonth && birthMonth < sign.endMonth) ||
      (sign.startMonth > sign.endMonth && (birthMonth > sign.startMonth || birthMonth < sign.endMonth))
    ) {
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

