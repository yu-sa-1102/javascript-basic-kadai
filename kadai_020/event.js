const putBtn = document.getElementById('btn');

let txtChange = document.getElementById('text');

putBtn.addEventListener('click',() => {
    txtChange.textContent = 'ボタンをクリックしました'
});