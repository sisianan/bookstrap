window.addEventListener('load',function(){
    var nav = document.getElementsByClassName('nav')[0];
    var hidden = document.getElementsByClassName('hidden-ul')[0];
    var btn = document.getElementsByClassName('hidden')[0];
    var height;
    window.addEventListener('resize',function(){
        var scrH = window.innerWidth;
        //要加上滚动条的宽度
        height = nav.clientHeight;
        console.log(scrH);
        if(scrH >= 770){
            hidden.style.transform = 'translateY(-251px)';
        }
    
    })
    btn.addEventListener('click',function(){
        var state = window.getComputedStyle(hidden,null).transform;
        console.log(state);
        switch(state){
            case 'matrix(1, 0, 0, 1, 0, -251)':
             hidden.style.transform = 'translateY('+ height +'px)';
            break;
            case 'matrix(1, 0, 0, 1, 0, 50)':
             hidden.style.transform = 'translateY(-251px)';
        
            break;
        }
    })
})