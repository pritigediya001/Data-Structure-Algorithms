// A simple API function that just logs when called
function callAPI(msg){
    console.log("Calling API with:", msg)
};

// Debounce higher-order function
// It takes a callback function and a timer (delay in ms),
// and returns a new debounced version of that function.
const debounceFunction = (callbackFunc, timer) => {
    let time; // closure variable to store the timeout ID

    // Return the debounced function
    return (...args) => {
        // If there’s an existing timeout pending → clear it
        if (time) {
            clearTimeout(time)
        }

        // Set a new timeout → after "timer" ms,
        // the callback will finally execute
        time = setTimeout(() => {
            callbackFunc(...args)
        }, timer)
    }
}

// Create a debounced version of callAPI with 3s delay because closure sould be created once 
const debounceAPI = debounceFunction(callAPI, 3000)

let count = 0;

// Run every 1 second
const interval = setInterval(() => {
    if (count === 5) {
        // Stop the interval after 5 iterations
        clearInterval(interval);
        return;
    }

    // Call the debounced function with a unique message
    // Each call resets the 3s timer, so callAPI will only run
    // if there’s a 3s gap without another call
    debounceAPI("Hey Priti " + count)    

    count++; // increase counter
}, 1000)
