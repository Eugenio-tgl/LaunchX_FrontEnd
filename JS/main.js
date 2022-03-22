const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("img/Unknown.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let name = data.name;
            let type = data.types[0].type.name;
            let hp = data.stats[0].base_stat;
            let att = data.stats[1].base_stat;
            let def = data.stats[2].base_stat;
            let sAtt = data.stats[3].base_stat;
            let sDef = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
            let move1 = data.abilities[0].ability.name;
            let move2 = data.abilities[1].ability.name;;
            pokeChange(pokeImg, name, type, hp, att, def, sAtt, sDef, speed, move1, move2);
            console.log(pokeImg);
        }
    });
}

const pokeChange = (url, name, type, hp, att, def, sAtt, sDef, speed, move1, move2) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
    document.getElementById("pName").innerHTML = (name)
    document.getElementById("pType").innerHTML = (type)
    document.getElementById("pStat1").innerHTML = (hp)
    document.getElementById("pStat2").innerHTML = (att)
    document.getElementById("pStat3").innerHTML = (def)
    document.getElementById("pStat4").innerHTML = (sAtt)
    document.getElementById("pStat5").innerHTML = (sDef)
    document.getElementById("pStat6").innerHTML = (speed)
    document.getElementById("pMove1").innerHTML = (move1)
    document.getElementById("pMove2").innerHTML = (move2)    
}