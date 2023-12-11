const tabla = document.querySelector('#table_world');
window.onload = categoria;
function categoria(){
    tabla.innerHTML = ``;
    if(category.cate.value == "tecno"){
        const opciones = {
            method : 'POST'
        }
        fetch('../php/category_php/tecno.php',opciones)
            .then(rest => rest.json())
            .then(rest =>{
            rest.forEach(element => {
                if(element.points_tec >= 250){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_tec}</td>
                        <td class = "table3"><img src="../img/tec/1er-puesto-tecnologua.png" class = "imagen"></td>
                    </tr>
                    `;
                }else if(element.points_tec >= 150){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_tec}</td>
                        <td class = "table3"><img src="../img/tec/2do-lugar-tecnologia.png" class = "imagen"></td>
                    </tr>
                    `;
                }else if(element.points_tec >= 100){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_tec}</td>
                        <td class = "table3"><img src="../img/tec/3er-lugar-tecnologua.png" class = "imagen"></td>
                    </tr>
                    `;
                }else{
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_tec}</td>
                        <td class = "table3"><img src="../img/signo.png" class = "imagen" style = "height: 100px;"></td>
                    </tr>
                    `;
                }
            });
        });
    }else if(category.cate.value == "art"){
        const opciones = {
            method : 'POST'
        }
        fetch('../php/category_php/art.php',opciones)
            .then(rest => rest.json())
            .then(rest =>{
            rest.forEach(element => {
                if(element.points_art >= 250){
                    tabla.innerHTML += `
                        <tr class = "table">
                            <th scope="row" class = "table3">${element.user}</th>
                            <td class = "table3">${element.points_art}</td>
                            <td class = "table3"><img src="../img/art/1er-lugar-arte.png" class = "imagen"></td>
                        </tr>
                        `;
                }else if(element.points_art >= 150){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_art}</td>
                        <td class = "table3"><img src="../img/art/2do-lugar-arte.png" class = "imagen"></td>
                    </tr>
                    `;
                }else if(element.points_art >= 100){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_art}</td>
                        <td class = "table3"><img src="../img/art/3er-lugar-arte.png" class = "imagen"></td>
                    </tr>
                    `;
                }else{
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_art}</td>
                        <td class = "table3"><img src="../img/signo.png" class = "imagen" style = "height: 100px;"></td>
                    </tr>
                    `;
                }
            });
        });
    }else if(category.cate.value == "sports"){
        const opciones = {
            method : 'POST'
        }
        fetch('../php/category_php/sport.php',opciones)
            .then(rest => rest.json())
            .then(rest =>{
            rest.forEach(element => {
                if(element.points_sport >= 250){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_sport}</td>
                        <td class = "table3"><img src="../img/sport/1er-lugar-deporte.png" class = "imagen"></td>
                    </tr>
                `;
                }else if(element.points_sport >= 150){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_sport}</td>
                        <td class = "table3"><img src="../img/sport/2do-lugar-deporte.png" class = "imagen"></td>
                    </tr>
                `;
                }else if(element.points_sport >= 100){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_sport}</td>
                        <td class = "table3"><img src="../img/sport/3er-lugar-deporte.png" class = "imagen"></td>
                    </tr>
                `;
                }else{
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_sport}</td>
                        <td class = "table3"><img src="../img/signo.png" class = "imagen" style = "height: 100px;"></td>
                    </tr>
                    `;
                }
            });
        });
    }else if(category.cate.value == "videogame"){
        const opciones = {
            method : 'POST'
        }
        fetch('../php/category_php/vg.php',opciones)
            .then(rest => rest.json())
            .then(rest =>{
            rest.forEach(element => {
                if(element.points_vg >= 250){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_vg}</td>
                        <td class = "table3"><img src="../img/vg/duel1.png" class = "imagen"></td>
                    </tr>
                    `;
                }else if(element.points_vg >= 150){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_vg}</td>
                        <td class = "table3"><img src="../img/vg/duel2.png" class = "imagen"></td>
                    </tr>
                    `;
                }else if(element.points_vg >= 100){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_vg}</td>
                        <td class = "table3"><img src="../img/vg/duel3.png" class = "imagen"></td>
                    </tr>
                    `;
                }else{
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_vg}</td>
                        <td class = "table3"><img src="../img/signo.png" class = "imagen" style = "height: 100px;"></td>
                    </tr>
                    `;
                }
            });
        });
    }else if(category.cate.value == "nyc"){
        const opciones = {
            method : 'POST'
        }
        fetch('../php/category_php/nc.php',opciones)
            .then(rest => rest.json())
            .then(rest =>{
            rest.forEach(element => {
                if(element.points_nc >= 250){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_nc}</td>
                        <td class = "table3"><img src="../img/nc/nc1er.png" class = "imagen"></td>
                    </tr>
                    `;
                }else if(element.points_nc >= 150){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_nc}</td>
                        <td class = "table3"><img src="../img/nc/nc2do.png" class = "imagen"></td>
                    </tr>
                    `;
                }else if(element.points_nc >= 100){
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_nc}</td>
                        <td class = "table3"><img src="../img/nc/nc3er.png" class = "imagen"></td>
                    </tr>
                    `;
                }else{
                    tabla.innerHTML += `
                    <tr class = "table">
                        <th scope="row" class = "table3">${element.user}</th>
                        <td class = "table3">${element.points_nc}</td>
                        <td class = "table3"><img src="../img/signo.png" class = "imagen" style = "height: 100px;"></td>
                    </tr>
                    `;
                }
            });
        });
    }else{
        const opciones = {
            method : 'POST'
        }
        fetch('../php/show_ranking.php',opciones)
            .then(rest => rest.json())
            .then(rest =>{
            rest.forEach(element => {
            if(element.total >= 250){
                tabla.innerHTML += `
                <tr class = "table">
                    <th scope="row" class = "table3">${element.user}</th>
                    <td class = "table3">${element.total}</td>
                    <td class = "table3"><img src="../img/general/general1er.png" class = "imagen"></td>
                </tr>
            `;
            }else if(element.total >= 150){
                tabla.innerHTML += `
                <tr class = "table">
                    <th scope="row" class = "table3">${element.user}</th>
                    <td class = "table3">${element.total}</td>
                    <td class = "table3"><img src="../img/general/general2do.png" class = "imagen" style = "padding-left:9%;"></td>
                </tr>
            `;
            }else if(element.total >= 100){
                tabla.innerHTML += `
                <tr class = "table">
                    <th scope="row" class = "table3">${element.user}</th>
                    <td class = "table3">${element.total}</td>
                    <td class = "table3"><img src="../img/general/general3er.png" class = "imagen"></td>
                </tr>
            `;
            }else if(element.total >= 50){
                tabla.innerHTML += `
                <tr class = "table">
                    <th scope="row" class = "table3">${element.user}</th>
                    <td class = "table3">${element.total}</td>
                    <td class = "table3"><img src="../img/general/general.png" class = "imagen" style = "height: 120px;"></td>
                </tr>
            `;
            }else{
                tabla.innerHTML += `
                <tr class = "table">
                    <th scope="row" class = "table3">${element.user}</th>
                    <td class = "table3" style = "	padding-bottom: 2%; padding-top: 2%; padding-left:2%;">${element.total}</td>
                    <td class = "table3"><img src="../img/signo.png" class = "imagen" style = "height: 100px;"></td>
                </tr>
            `;
            }
            });
        });
    }
}
