const subsListRenderCat3 = document.querySelector('.subs-list-render-cat3'),
    subsListRenderCat6 = document.querySelector('.subs-list-render-cat6'),
    subsListRenderCat7 = document.querySelector('.subs-list-render-cat7');

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

const renderSubsPartn3 = (List) => {
    for (let i = 0, cum = 0; i < List.length; i++) {
        if (List[i].Category == 3 && cum < 4) {
            const ticket = createCard(List[i]);
            subsListRenderCat3.append(ticket);
            cum++;
        }
    }
}

renderSubsPartn3(allSubs);

const renderSubsPartn6 = (List) => {
    for (let i = 0, cum = 0; i < List.length; i++) {
        if (List[i].Category == 6 && cum < 4) {
            const ticket = createCard(List[i]);
            subsListRenderCat6.append(ticket);
            cum++;
        }
    }
}

renderSubsPartn6(allSubs);

const renderSubsPartn7 = (List) => {
    for (let i = 0, cum = 0; i < List.length; i++) {
        if (List[i].Category == 7 && cum < 4) {
            const ticket = createCard(List[i]);
            subsListRenderCat7.append(ticket);
            cum++;
        }
    }
}

renderSubsPartn7(allSubs);