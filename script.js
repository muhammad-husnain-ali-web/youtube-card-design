let btn = document.querySelector(".btn")
function createcard(tmb, dur, chan, views, mon, tit) {
    let contain = document.createElement("div");
    contain.setAttribute("class", "container");

    // Thumbnail container
    let thum = document.createElement("div");
    thum.setAttribute("class", "thum");

    let img = document.createElement("img");
    img.src = tmb; 
    img.alt = "Not found"
    thum.append(img);

    let duration = document.createElement("div");  
    duration.setAttribute("class", "duration");
    duration.innerText = dur;
    thum.append(duration);

    contain.append(thum);

    let contant = document.createElement("div")
    contant.setAttribute("class", "contant")

    let title = document.createElement("div")
    title.setAttribute("class", "title")
    title.innerText = tit
    contant.append(title)

    // Description container
    let disction = document.createElement("div");
    disction.setAttribute("class", "disction");

    let sp1 = document.createElement("span");
    sp1.innerText = chan;
    disction.append(sp1);

    let sp2 = document.createElement("span");
    if(views<1000)
    {
        sp2.innerText = views + " views";
    }
    else if(views<1000000)
    {
        views = views/1000
        sp2.innerText = views.toFixed(2) + "K views";
    }
    else if(views<100000000000)
    {
        views = views/1000000
        sp2.innerText = views.toFixed(2) + "M views";
    }
    else
    {
        views = views/100000000000
        sp2.innerText = views.toFixed(2) + "M views";
    }
    
    disction.append(sp2);

    let sp3 = document.createElement("span");
    sp3.innerText = mon;
    disction.append(sp3);
    contant.append(disction);
    contain.append(contant);

    // Append to body
    
    btn.before(contain)
    // contain.before(btn)
}



btn.addEventListener("click", ()=>{
    let img = prompt("Enter image Link: ");
    let duration = prompt("Enter duration: ");
    let chanal = prompt("Enter chanel name: ");
    let views = parseInt(prompt("Enter views: "));
    let old = prompt("Enter mounth ago: ");
    let title = prompt("Enter title: ");
    console.log(views, typeof views)
    
    createcard(img, duration, chanal, views, old, title);
})