const putBtn = document.getElementById('btn');

const txtChange = document.getElementById('text');

putBtn.addEventListener('click',() => {
    txtChange.textContent = 'ボタンをクリックしました'
});