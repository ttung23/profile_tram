const pageLinks = document.querySelectorAll('.page-link');



for(let i = 0; i < pageLinks.length; i++){
    const elem = pageLinks[i];
    
    elem.addEventListener('click',function(e) {
        e.preventDefault();
        const pageLinkId = e.target.href.split('#')[1];
        
        
        const page = document.getElementById(pageLinkId);

        for (let j = 0; j < pageLinks.length; j++) {
            const otherPageLink = document.getElementById(pageLinks[j].href.split('#')[1]);
            
            if (otherPageLink !== page) {
                document.getElementById(pageLinks[j].href.split('#')[1])
                otherPageLink.classList.remove('show');
            }
        }
        
        page.classList.add('show')

    })
}

// window.onscroll = function() {
//     if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//         // Đã lướt đến cuối trang web
//         console.log(111);
//     }
//     console.log(111);
// };

