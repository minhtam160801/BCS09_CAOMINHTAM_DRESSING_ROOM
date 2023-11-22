document.querySelector('.nav-pills').innerHTML = `
    <li><button class="tablinks active">Áo</button></li>
    <li><button class="tablinks ">Quần</button></</li>
    <li><button class="tablinks ">Giày dép</button></</li>
    <li><button class="tablinks ">Túi xách</button></</li>
    <li><button class="tablinks">Dây chuyền</button></</li>
    <li><button class="tablinks">Kiểu tóc</button></</li>
    <li><button class="tablinks">Nền</button></</li>
`;
// document.querySelector('.tab-content').innerHTML = `
    
// `;

var buttons = document.getElementsByClassName('tablinks');
    var contents = document.getElementsByClassName('content');
    function showContent(id){
        for (var i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none';
        }
        var content = document.getElementById(id);
        content.style.display = 'block';
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function(){
            var id = this.textContent;
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove("active");
            }
            this.className += " active";
            showContent(id);
        });
    }
showContent('Áo');