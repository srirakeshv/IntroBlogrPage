let arrowDown=document.querySelectorAll('.down')
let product=document.querySelector('.product')
let company=document.querySelector('.company')
let connect=document.querySelector('.connect')
let arrowUp=document.querySelectorAll('.up')


// down arrow
arrowDown.forEach((arrow,index)=>{
    arrow.addEventListener('click',()=>{
        let num=index
        if(num===0)
        {
            product.classList.toggle('true1')
            arrow.classList.add('nonactive')
        }
        else if(num===1)
        {
            company.classList.toggle('true2')
            arrow.classList.add('nonactive')
        }
        else if (num===2)
        {
            connect.classList.toggle('true3')
            arrow.classList.add('nonactive')
        }
        call(num)
    })
})


function call(num){
    arrowUp.forEach((arrow1)=>{
        arrow1.classList.remove('active')
    })
    if(num>=0 && num<arrowUp.length)
    {
        arrowUp[num].classList.add('active')
    }
}

// up arrow

arrowUp.forEach((arrow,index)=>{
    arrow.addEventListener('click',()=>{
        let num=index
        if(num===0)
        {
            product.classList.toggle('true1')
            arrow.classList.remove('active')
        }
        else if(num===1)
        {
            company.classList.toggle('true2')
            arrow.classList.remove('active')
        }
        else if (num===2)
        {
            connect.classList.toggle('true3')
            arrow.classList.remove('active')
        }
        recall(num)
    })
})

function recall(num){
    arrowDown.forEach(arrow=>{
        arrow.classList.remove('nonactive')
    })
    if(num>=0 && num<arrowDown.length)
    {
        arrowDown[num].classList.add('active')
    }
}
// menu bar icon
let mobileUp=document.querySelectorAll('.mobileup')
let mobileDown=document.querySelectorAll('.mobiledown')
let mobileProduct=document.querySelector('.mobileproduct')
let mobileCompany=document.querySelector('.mobilecompany')
let mobileconnect=document.querySelector('.mobileconnect')
let up1=document.querySelector('.m1')
let up2=document.querySelector('.m2')
let up3=document.querySelector('.m3')
let dn1=document.querySelector('.f1')
let dn2=document.querySelector('.f2')
let dn3=document.querySelector('.f3')

mobileDown.forEach((down,index)=>{
    down.addEventListener('click',()=>{
        let inter=index
        if(inter===0)
        {
            mobileProduct.classList.toggle('mactive1')
            dn1.style.display='none'
            up1.style.display='inline'
        }
        else if(inter===1)
        {
            mobileCompany.classList.toggle('mactive2')
            dn2.style.display='none'
            up2.style.display='inline'
        }
        else if(inter===2)
        {
            mobileconnect.classList.toggle('mactive3')
            dn3.style.display='none'
            up3.style.display='inline'
        }
    })
})


mobileUp.forEach((up,index)=>{
    up.addEventListener('click',()=>{
        let inter2=index
        if(inter2===0)
        {
            mobileProduct.classList.toggle('mactive1')
            up1.style.display='none'
            dn1.style.display='inline'
        }
        else if(inter2===1)
        {
            mobileCompany.classList.toggle('mactive2')
            up2.style.display='none'
            dn2.style.display='inline'
        }
        else if(inter2===2)
        {
            mobileconnect.classList.toggle('mactive3')
            up3.style.display='none'
            dn3.style.display='inline'
        }
    })
})

// main icon
let hamburgerIcon=document.querySelector('.hamburgericon')
let closeIcon=document.querySelector('.closeicon')
let nav=document.querySelector('nav')

hamburgerIcon.addEventListener('click',()=>{
    nav.classList.toggle('activate')
    closeIcon.style.display='block'
    hamburgerIcon.style.display='none'
})

closeIcon.addEventListener('click',()=>{
    nav.classList.toggle('activate')
    closeIcon.style.display='none'
    hamburgerIcon.style.display='block'
})

window.addEventListener('resize', () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 900) {
        // Ensure the hamburger icon is hidden when the screen is larger than 900px
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'none';

        // Close the mobile menu by removing the 'activate' class
        nav.classList.remove('activate');
    } else {
        // Show the hamburger icon when the screen is smaller than 900px
        hamburgerIcon.style.display = 'block';
    }
});

// Initial check when the page loads
if (window.innerWidth > 900) {
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'none';
}