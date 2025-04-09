console.log("Enter nu :");

// Listen for user input
process.stdin.once("data", (data) => {
  const n = Number(data); // Convert Buffer to string and trim whitespace
  console.log(`Number :: ${n}!`);
  process.stdin.end(); // Close the input stream
});
