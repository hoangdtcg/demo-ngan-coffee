class Menu { //Quản lý các đồ uống: Thêm - sửa - xóa đồ uống
    constructor() {
        this.drinks = [];
    }

    getTitle(){
        let str = `<tr>
                        <th>Ảnh minh họa</th>
                        <th>Tên đồ uống</th>
                        <th>Giá thành</th>
                        <th>Loại đồ uống</th>
                        <th>Mô tả</th>
                        <th colspan="2">Thao tác</th>
                    </tr>`;
        return str;
    }
    //Hiển thị menu
    display(){
        let str = this.getTitle();
        let id = 0;
        for(let drink of this.drinks){
            str += `<tr>
                        <td><img src="${drink.image}"></td>
                        <td>${drink.name}</td>
                        <td>${drink.price}</td>
                        <td>${drink.category}</td>
                        <td>${drink.desc}</td>
                        <td><button>Sửa</button></td>
                        <td><button onclick="delDrink(${id})">Xóa</button></td>
                    </tr>`;
            id++;
        }

        return str;
    }

    //Thêm đồ uống
    add(drink){
        this.drinks.push(drink);
    }

    //Sửa
    edit(index){

    }

    //Xóa
    del(index){
        this.drinks.splice(index,1);
    }

}
