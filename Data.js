function saveData(data) {
    localStorage.setItem('menu',JSON.stringify(data));
}

function loadData() {
    if(localStorage.hasOwnProperty('menu')){
        let data = JSON.parse(localStorage.getItem('menu'));
        return data;
    }else {
        return [];
    }
}
