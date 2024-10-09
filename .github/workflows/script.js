import fetch from 'node-fetch';

const url = 'https://api.adsgram.ai/event?type=reward&trackingtypeid=14&record=...';

const makeMoney = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
};

makeMoney();
