window.addEventListener('load', function(e){
    const searchBar = document.querySelector('#filter')
    const thumbNails = document.querySelectorAll('.thumb-display')
    const tags = document.querySelectorAll('.tags');
    const reset = document.querySelector('.reset');
    
    /* Add input event listener */
    searchBar.addEventListener('input', onSearchItems)

    function onSearchItems(e){
        const searchInput = e.currentTarget.value.trim().toLowerCase()

        if(searchInput === ""){
            resetTheDisplay()
        }else{
            searchMatchItems(searchInput)
        }
    }

    searchBar.addEventListener('keydown', function(e){
        if(e.keyCode == 13) {
            e.preventDefault();
        }
    })

    function searchMatchItems(searchInput){
        let index = 0;
        reset.classList.remove('hidden');
        while (index < tags.length){
            thumbNails[index].classList.add('hidden');
            if(tags[index].innerHTML.includes(searchBar.value)){
                searchBar[index].classList.remove('hidden');
            }
            index++;
        }
    }
        

    function resetTheDisplay(){
        reset.addEventListener('click', function(e){
            let index = 0;
            searchBar.value = "";
            reset.classList.add('hidden');
            while (index < tags.length){
                thumbNails[index].classList.remove('hidden');
                index++;
            }
        })
        e.preventDefault();
    }
})