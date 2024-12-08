function openPopup(project) {
    const popup = document.getElementById('popup');
    
    
    if (project === 'project1') {
        document.getElementById('popup-title').innerText = 'Algorithmic Trading Bot';
        document.getElementById('popup-description').innerText = 'This project involved developing a high-frequency trading bot that analyzes market data and executes trades automatically. It was built using Python and utilizes machine learning algorithms for predictive analytics.';
    } 

    popup.style.display = 'flex'; 
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; 
}