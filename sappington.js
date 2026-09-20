document.getElementById('load-more-btn').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    
    const batchSize = 12; 
    
    for (let i = 0; i < batchSize && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }
    
    if (document.querySelectorAll('.gallery-item.hidden').length === 0) {
        document.getElementById('load-more-btn').style.display = 'none';
    }
});
