let selectHeader = select('#header')
let selectTopbar = select('#topnar')
if(selectHeader){
    const headerScrolled = () =>{
        if(window.scrollY > 100){
            selectHeader.classList.add('header_scrolled');
            if(selectTopbar){
                selectTopbar.classList.add('topbar-scrolled')
            }
        }else{
            selectHeader.classList.remove('header_scrolled');
            if(selectTopbar){
                selectTopbar.classList.remove('topbar-scrolled')
            }
        }
        
    }
    window.addEventListener('load', headerScrolled)
}
onscroll(document, headerScrolled)