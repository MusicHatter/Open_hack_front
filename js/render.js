const partners = [
    {
        "id": 1,
        "Name": "Ivi",
        "Description": "Домашний кинотеатр",
        "Price": 1000,
        "Duration": "3",
        "Category": 3
      },
      {
        "id": 2,
        "Name": "MTC",
        "Description": "Мобильные услуги",
        "Price": 650,
        "Duration": "3",
        "Category": 6
      },
      {
        "id": 3,
        "Name": "Тройка",
        "Description": "Транспортный услуги",
        "Price": 2500,
        "Duration": "3",
        "Category": 5
      },
      {
        "id": 4,
        "Name": "YandexMusic",
        "Description": "Музыкальный сервис",
        "Price": 400,
        "Duration": "3",
        "Category": 2
      },
      {
        "id": 5,
        "Name": "YouTube",
        "Description": "Домашний кинотеатр",
        "Price": 1000,
        "Duration": "3",
        "Category": 3
      },
      {
        "id": 6,
        "Name": "Okko",
        "Description": "Домашний кинотеатр",
        "Price": 1200,
        "Duration": "3",
        "Category": 3
      }
];

const userSubs = [
    {
        "id": 8,
        "Name": "ПионерНет",
        "Description": "Услуги для дома",
        "Price": 1200,
        "Duration": "1",
        "Category": 4,
        "Bank": true
      },
      {
        "id": 9,
        "Name": "МЭС",
        "Description": "Услуги для дома",
        "Price": 760,
        "Duration": "3",
        "Category": 4,
        "Bank": false
      },
      {
        "id": 11,
        "Name": "ЖКХ",
        "Description": "Услуги для дома",
        "Price": 900,
        "Duration": "15",
        "Category": 4,
        "Bank": false
      },
      {
        "id": 12,
        "Name": "PlayMarket",
        "Description": "Игровой сервис",
        "Price": 700,
        "Duration": "4",
        "Category": 8,
        "Bank": true
      },
      {
        "id": 13,
        "Name": "Netflix",
        "Description": "Домашний кинотеатр",
        "Price": 1600,
        "Duration": "7",
        "Category": 3,
        "Bank": true
      },
      {
        "id": 14,
        "Name": "UFC",
        "Description": "Спортивный сервис",
        "Price": 2000,
        "Duration": "7",
        "Category": 1,
        "Bank": true
      }
];

const modalInfo = document.querySelector('.modal-info'),
    modalClose1 = document.querySelector('.modal-close-1'),
    subsListItemAdd = document.querySelector('.subs-list-item-add'),
    modalAdd = document.querySelector('.modal-add'),
    modalClose2 = document.querySelector('.modal-close-2'),
    moneySubsBtnSave = document.querySelector('.money-subs-btn-save');

const subsListRenderPart = document.querySelector('.subs-list-render-part'),
    subsListRenderAllow = document.querySelector('.subs-list-render-allow'),
    subsListRenderUser = document.querySelector('.subs-list-render-user');

const url_addr_all = '/all_services',
    url_addr_user = '/all_users_and_services';

const getData = (url, callback, reject = console.error) => {
    const request = new XMLHttpRequest();

    request.open('GET', url);

    request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) return;

        if (request.status === 200) {
            callback(request.response);
        } else {
            reject(request.status);
        }
    });

    request.send();
}

city = [];


getData(url_addr_all, (data) => {
    allSubs = JSON.parse(data);
});

getData(url_addr_user, (data) => {
    userSubs = JSON.parse(data);
});


/*******
 * 
 * Render recomend subs
 * 
 * ****** */

const createCard = (data) => {
    const ticket = document.createElement('li');
    ticket.classList.add('subs-list-item');
    ticket.id = `${data.id}`;

    let deep = '';

    if (data) {
        deep = `
            <img id="${data.id}" class="img-subs" src="img/pic/${data.id}.jpg">
            <span id="${data.id}" class="subs-title">${data.Name}</span>
        `;
    }

    ticket.insertAdjacentHTML('afterbegin', deep)

    return ticket;
}

const renderSubsPartn = (List) => {
    for (let i = 0; i < List.length; i++) {
        const ticket = createCard(List[i]);
        subsListRenderPart.append(ticket);
    }
}

renderSubsPartn(partners);

/*****
 * 
 * Render user subs
 * 
 */

const createUserCard = (data) => {
    const ticket = document.createElement('li');
    ticket.classList.add('subs-list-item');
    ticket.id = `${data.id}`;

    if (data.Bank === true) {
        ticket.classList.add('subs-list-bank');
    }

    let deep = '';

    if (data) {
        deep = `
            <img id="${data.id}" class="img-subs" src="img/pic/${data.id}.jpg">
            <span id="${data.id}" class="subs-title">${data.Name}</span>
            <span id="${data.id}" class="subs-info-date">Осталось дней: ${data.Duration}</span>
        `;
    }

    ticket.insertAdjacentHTML('afterbegin', deep)

    return ticket;
}

const renderSubsUser = (List) => {
    for (let i = 0; i < List.length; i++) {
        const ticket = createUserCard(List[i]);
        if (List[i].Duration <= 5) {
            subsListRenderAllow.append(ticket);
        } else {
            subsListRenderUser.append(ticket);
        }
    }
}

renderSubsUser(userSubs);

/* ДОбавить событе */

const moneySubsTitleInput = document.querySelector('.money-subs-title-input'),
    moneySubsDateEndInput = document.querySelector('.money-subs-date-end-input'),
    formAtr = document.querySelector('.form-atr'),
    moneySubsBtnDel = document.querySelector('.money-subs-btn-del-2');

moneySubsBtnDel.addEventListener('click', function (event) {
    event.preventDefault();

    console.log("123");

    const ticket = document.createElement('li');
    ticket.classList.add('subs-list-item');
    ticket.id = 45;

    let deep = `
        <img id="${45}" class="img-subs" src="img/pic/${45}.jpg">
        <span id="${45}" class="subs-title">${moneySubsTitleInput.value}</span>
        <span id="${45}" class="subs-info-date">Осталось дней: ${moneySubsDateEndInput.value}</span>
    `;

    ticket.insertAdjacentHTML('afterbegin', deep)

    subsListRenderUser.append(ticket);

    modalAdd.classList.remove('display-block');
});

/****
 * 
 * 
 * 
 * 
 * 
 */


const subsListItem = document.querySelectorAll('.subs-list-item');

const moneySubsTitle = document.querySelector('.money-subs-title'),
    moneySubsCost = document.querySelector('.money-subs-cost'),
    moneySubsDescription = document.querySelector('.money-subs-description'),
    moneySubsDateEnd = document.querySelector('.money-subs-date-end');

for (index = 0; index < subsListItem.length; index++) {
    Item = subsListItem[index];
    Item.addEventListener('click', function (event) {
        event.preventDefault();
        modalInfo.classList.toggle('display-block');
        
        allSubs.forEach(element => {
           if (event.target.id == element.id) {
                moneySubsTitle.textContent = element.Name;
                moneySubsCost.textContent = element.Price + ' руб/месяц';
                moneySubsDescription.textContent = element.Description;
                moneySubsDateEnd.textContent = element.Duration;
           } 
        });
    });
}

subsListItemAdd.addEventListener('click', function (event) {
    event.preventDefault();
    modalAdd.classList.toggle('display-block');
});

modalClose1.addEventListener('click', function (event) {
    event.preventDefault();
    modalInfo.classList.remove('display-block');
});

modalClose2.addEventListener('click', function (event) {
    event.preventDefault();
    modalAdd.classList.remove('display-block');
});

moneySubsBtnSave.addEventListener('click', function (event) {
    event.preventDefault();
    modalAdd.classList.remove('display-block');
});

