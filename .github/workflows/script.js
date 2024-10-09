// Import node-fetch
const fetch = require('node-fetch');

// Your URL
const url = 'https://api.adsgram.ai/event?type=reward&trackingtypeid=14&record=IiRmNzEyMTYxMi1iY2Q4LTQ4NTEtYTE0ZC1iMGZjMjRlNDg5ZDEqBDgzMjkyBTEwNTQ1OgU4NzcxOUDLlY-4BkoJOTQ0NDE4MjMyUgQzODUyWhpodHRwczovL2JvdC50b25jaXJjbGUub3JnL2IBMmoDd2VicgJlbooBBDMyMTKSAQQ3MjY0mgEMNDM4NTkuNTAwMDAwqgEIMC40NTc3MDGyAQEyugEMNTQuMTcwLjY5LjI5wgECaWU';

// Function to make money
function makeMoney() {
    fetch(url)
        .then((res) => {
            console.log(res.status === 200 ? 'Success' : 'Failed');
        })
        .catch(console.error);
}

// Set interval for the function to run every minute
setInterval(makeMoney, 60 * 1000);
console.log('Started..');
makeMoney();
