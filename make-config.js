const fs = require("fs");
fs.writeFileSync(
  "config.js",
  `window.CLIPMATH_CONFIG=${JSON.stringify({
    url: process.env.SUPABASE_URL || "",
    key: process.env.SUPABASE_ANON_KEY || ""
  })};`
);
console.log("config.js written:", process.env.SUPABASE_URL ? "SUPABASE_URL set" : "SUPABASE_URL MISSING");
