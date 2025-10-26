// --- 1. Control del Menú Móvil ---
var menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function() {
    var navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
});
// --- 2. Simulación de Carrusel (Cambio de fondo) ---
// --- 3. Placeholder de la función de Búsqueda ---
// --- 4. Cuadricula de eventos ---
var showMoreButton = document.getElementById('showMoreButton');
var postSection = document.getElementById('postSection');
var eventList = [
    {   id: 1001,
        img: '../statics/img/events/event1.jpg',
        alt: 'Evento 1',
        date: '2024-07-15',
        title: 'Evento 1',
        subEvents: [] },
    {   id: 1002,
        img: '../statics/img/events/event2.jpg',
        alt: 'Evento 2',
        date: '2024-08-20',
        title: 'Evento 2',        
        subEvents: [
            {   id: 1003, 
                img: '../statics/img/events/event2_sub1.jpg',
                alt: 'Subevento 2.1',
                date: '2024-08-21',
                title: 'Subevento 2.1' },
            {   id: 1004, 
                img: '../statics/img/events/event2_sub2.jpg',
                alt: 'Subevento 2.2',
                date: '2024-08-22', 
                title: 'Subevento 2.2' } ]},
    {   id: 1005,
        img: '../statics/img/events/event3.jpg',
        alt: 'Evento 3',
        date: '2024-09-10',
        title: 'Evento 3',
        subEvents: [] },
    {   id: 1006,
        img: '../statics/img/events/event4.jpg',
        alt: 'Evento 4',
        date: '2024-10-05',
        title: 'Evento 4',
        subEvents: [] },
    {   id: 1007,
        img: '../statics/img/events/event5.jpg',
        alt: 'Evento 5',
        date: '2024-11-12',
        title: 'Evento 5',
        subEvents: [] },
    {   id: 1008,
        img: '../statics/img/events/event6.jpg',
        alt: 'Evento 6',
        date: '2024-12-01',
        title: 'Evento 6',
        subEvents: [] },
    {   id: 1009,
        img: '../statics/img/events/event7.jpg',
        alt: 'Evento 7',
        date: '2025-01-20',
        title: 'Evento 7',
        subEvents: [] },
    {   id: 1010,
        img: '../statics/img/events/event8.jpg',
        alt: 'Evento 8',
        date: '2025-02-14',
        title: 'Evento 8',
        subEvents: [] }
]
var eventCount = 0;
showMoreButton.addEventListener('click', function() {
    // Cargar más eventos
    for (var i = 0; eventCount < eventList.length && i < 4; i++, eventCount++) {
        var event = eventList[eventCount];
        var postDiv = document.createElement('div');
        postDiv.className = 'post white-post';
        postDiv.innerHTML = "<img src="+ event["img"] +" alt="+ event["alt"] +" class='event-logo'>"
        postInfo = document.createElement('div');
        postInfo.className = 'post-info';
        postInfo.innerHTML = "<p class='post-date'>"+ event["date"] +
        "</p><h3 class='post-title'>"+ event["title"] +"</h3>";
        postDiv.appendChild(postInfo);
        if (event["subEvents"].length > 0)
            postDiv.innerHTML += "<button class='post-button'>Ver eventos</button>";
        else
            postDiv.innerHTML += "<button class='post-button'>Ver fotos</button>";
        postSection.appendChild(postDiv);
    }
    if (eventCount >= eventList.length) {
        showMoreButton.style.display = 'none';
    }
});