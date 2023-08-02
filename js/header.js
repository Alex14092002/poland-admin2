(async ()=>{
    const navbar = document.querySelector('.navbar-nav')
    const res = await fetch(`https://db-ecomer-pola-default-rtdb.firebaseio.com/.json`)
    const data = await res.json()
    const addBtn = document.querySelector('.add-button')
    addBtn.innerHTML += `
        <button>Thêm Danh Mục</button>
    `
    navbar.innerHTML += `
    <a href="index.html" class="nav-item nav-link "><i class="fa fa-tachometer-alt me-2"></i>Trang Chủ</a>  
    <a href="order.html" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Đơn Hàng</a>
    <a href="./product.html?id_catelory=akcesorie" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>akcesorie</a>
    <a href="./product.html?id_catelory=baterie" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>baterie</a>
    <a href="./product.html?id_catelory=budzik" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>budzik</a>
    <a href="./product.html?id_catelory=czajnik" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>czajnik</a>
    <a href="./product.html?id_catelory=garnki" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>garnki</a>
    <a href="./product.html?id_catelory=gaz" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>gaz</a>
    <a href="./product.html?id_catelory=golarka" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>golarka</a>
    <a href="./product.html?id_catelory=kuchenka" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>kuchenka</a>
    <a href="./product.html?id_catelory=lampa" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>lampa</a>
    <a href="./product.html?id_catelory=latarka" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>latarka</a>
    <a href="./product.html?id_catelory=najlepsza_wyprzedaz" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>najlepsza_wyprzedaz</a>
    <a href="./product.html?id_catelory=nozycki" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>nozycki</a>
    <a href="./product.html?id_catelory=obuwie" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>obuwie</a>
    <a href="./product.html?id_catelory=parasol" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>parasol</a>
    <a href="./product.html?id_catelory=patelnia" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>patelnia</a>
    <a href="./product.html?id_catelory=radio" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>radio</a>
    <a href="./product.html?id_catelory=suszarka" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>suszarka</a>
    <a href="./product.html?id_catelory=thermos" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>thermos</a>
    <a href="./product.html?id_catelory=wentylator" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>wentylator</a>
    <a href="./product.html?id_catelory=zabawka" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>zabawka</a>
    <a href="./product.html?id_catelory=zelarko" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>zelarko</a>
    <a href="./product.html?id_catelory=sanphammoi" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Sản Phẩm Mới</a>
    <a href="./email.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Email</a>
    `
})()