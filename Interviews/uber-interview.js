const tasksWithTime = [9, 8, 6, 5, 6, 8];
const totalCPUs = 4;

const manageTask = (CPUNumber, result, cpuUsage, tasks, taskIndex, resolve) => {
  // Assign task
  result.push(CPUNumber);
  cpuUsage[CPUNumber] = true;

  setTimeout(() => {
    // Mark the task comeplted and free the CPU
    resolve({
      success: true,
    });
  }, tasks[taskIndex]);

};

const createPromise = async (CPUNumber, result, cpuUsage, tasks, i) => {
console.log("Pick New task :: ", CPUNumber, tasks[i])
  return new Promise((resolve, reject) => {
    manageTask(CPUNumber, result, cpuUsage, tasks, i, resolve);
  })
    .then((data) => {
      // check next any task is pending to execute
      console.log("RESOLVED :: CPUNumber :: ", CPUNumber);
      if (result.length < tasks.length) {
        // still any task is pending
        createPromise(CPUNumber, result, cpuUsage, tasks, result.length);
      } else {
        delete cpuUsage[CPUNumber];
      }
    })
    .catch((error) => {
      console.log("Error in task", { error });
      reject(error);
    });
};

// Simulate the process just like a progress chart
// return array which contains CPU numbers per task
const processTask = async (tasks, noOfCPUs) => {
  if (noOfCPUs <= 0 || tasks.length === 0) {
    return [];
  }

  const result = [];
  const cpuUsage = {};
  const promiseList = [];

  for (let i = 0; i < noOfCPUs; i++) {
    const CPUNumber = i + 1;
    if (cpuUsage[CPUNumber]) {
      continue;
    }

    const promise = createPromise(CPUNumber, result, cpuUsage, tasks, i);
    promiseList.push(promise);
  }


  const intervalTime = setInterval(() => {
    // Check if all CPUs are utiized and need to wait
    if (Object.keys(cpuUsage).length === noOfCPUs) {
        console.log(`======== Waiting for CPU to availbale ===========`);
    } 
  }, 1);

  await Promise.allSettled(promiseList)

  clearInterval(intervalTime)
  
  return result;
};

(async () => {
    console.log("------------------ Result ------------------", await processTask(tasksWithTime, totalCPUs));
})();

