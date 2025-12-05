export default function timeAgo(date) {
  const d = new Date(date);
  const now = new Date();
  let diff = Math.floor((now - d) / 1000);

  const isFuture = diff < 0;
  diff = Math.abs(diff);

  const units = [
    { max: 60, value: 1, name: "second" },
    { max: 3600, value: 60, name: "minute" },
    { max: 86400, value: 3600, name: "hour" },
    { max: 604800, value: 86400, name: "day" },
    { max: 2592000, value: 604800, name: "week" },
    { max: 31536000, value: 2592000, name: "month" },
    { max: Infinity, value: 31536000, name: "year" },
  ];

  for (const u of units) {
    if (diff < u.max) {
      const amount = Math.floor(diff / u.value);

      if (amount <= 0) return isFuture ? "Coming Soon" : "Just Now";

      return isFuture
        ? `within ${amount} ${u.name}`
        : `${amount} ${u.name} ago`;
    }
  }
}
